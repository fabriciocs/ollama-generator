<#
.SYNOPSIS
  Gera uma mensagem de commit usando Ollama a partir do contexto atual do repositorio Git.

.DESCRIPTION
  Coleta informacoes relevantes do repositorio Git e envia para o Ollama para gerar
  uma mensagem de commit em portugues do Brasil seguindo Conventional Commits.

  O script nao executa git add.
  O script nao executa git commit.
  O script apenas gera e imprime a mensagem sugerida.

.EXAMPLE
  .\gerar-mensagem-commit.ps1

.EXAMPLE
  .\gerar-mensagem-commit.ps1 -QuietGitWarnings

.EXAMPLE
  .\gerar-mensagem-commit.ps1 -OllamaHost "192.168.0.103" -Model "llama3.1:8b"
#>

param(
  [string]$OllamaHost = "192.168.0.103",
  [int]$OllamaPort = 11434,
  [string]$Model = "llama3.1:8b",
  [int]$MaxDiffChars = 1200,
  [int]$MaxStatusLines = 16,
  [int]$MaxRecentCommits = 2,
  [int]$MaxFileLines = 12,
  [int]$NumCtx = 2048,
  [int]$NumPredict = 120,
  [switch]$IncludeUntrackedNames,
  [switch]$IncludeDiffBody,
  [switch]$QuietGitWarnings,
  [switch]$DebugMode
)

$ErrorActionPreference = "Stop"

try {
  [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
  $OutputEncoding = [System.Text.Encoding]::UTF8
} catch {
  # Ignora ambientes que nao permitam alterar encoding.
}

function Write-Info {
  param([string]$Message)
  Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

function Write-Warn {
  param([string]$Message)
  Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Err {
  param([string]$Message)
  Write-Host "[ERRO] $Message" -ForegroundColor Red
}

function Write-DebugLog {
  param(
    [string]$Message,
    [object]$Data
  )

  if (-not $DebugMode) {
    return
  }

  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss.fff"
  if ($PSBoundParameters.ContainsKey('Data')) {
    try {
      $serialized = $Data | ConvertTo-Json -Depth 8 -Compress
    } catch {
      $serialized = [string]$Data
    }

    Write-Host "[DEBUG][$timestamp] $Message :: $serialized" -ForegroundColor DarkGray
    return
  }

  Write-Host "[DEBUG][$timestamp] $Message" -ForegroundColor DarkGray
}

function ConvertTo-ProcessArgumentString {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments
  )

  $escapedArguments = foreach ($arg in $Arguments) {
    if ($null -eq $arg) {
      '""'
      continue
    }

    if ($arg -match '[\s"]') {
      '"' + ($arg -replace '(\\*)"', '$1$1\"') + '"'
    } else {
      $arg
    }
  }

  return ($escapedArguments -join ' ')
}

function Invoke-GitCommand {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments
  )

  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = "git"
  $psi.Arguments = ConvertTo-ProcessArgumentString -Arguments $Arguments
  $psi.UseShellExecute = $false
  $psi.RedirectStandardOutput = $true
  $psi.RedirectStandardError = $true
  $psi.CreateNoWindow = $true

  try {
    $psi.StandardOutputEncoding = [System.Text.Encoding]::UTF8
    $psi.StandardErrorEncoding = [System.Text.Encoding]::UTF8
  } catch {
    # Compatibilidade com versoes antigas do PowerShell/.NET.
  }

  $process = New-Object System.Diagnostics.Process
  $process.StartInfo = $psi
  $cmd = "git $($Arguments -join ' ')"
  $startedAt = Get-Date

  Write-DebugLog -Message "Executando comando Git" -Data @{
    command = $cmd
    arguments = $Arguments
  }

  [void]$process.Start()
  $stdout = $process.StandardOutput.ReadToEnd()
  $stderr = $process.StandardError.ReadToEnd()
  $process.WaitForExit()

  $durationMs = [int]((Get-Date) - $startedAt).TotalMilliseconds
  Write-DebugLog -Message "Comando Git finalizado" -Data @{
    command = $cmd
    exitCode = $process.ExitCode
    durationMs = $durationMs
    stdoutLength = if ($null -eq $stdout) { 0 } else { $stdout.Length }
    stderrLength = if ($null -eq $stderr) { 0 } else { $stderr.Length }
  }

  if ($process.ExitCode -ne 0) {
    $details = @($stderr, $stdout) -join "`n"
    throw "Falha ao executar: $cmd`n$details"
  }

  if (-not [string]::IsNullOrWhiteSpace($stderr) -and -not $QuietGitWarnings) {
    Write-Warn "Git retornou aviso ao executar: git $($Arguments -join ' ')"
    Write-Warn $stderr.Trim()
  }

  if ($null -eq $stdout) {
    return ""
  }

  return $stdout.TrimEnd()
}

function Get-GitValue {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments,

    [string]$Fallback = ""
  )

  try {
    return Invoke-GitCommand -Arguments $Arguments
  } catch {
    Write-Warn "Nao foi possivel coletar: git $($Arguments -join ' ')"
    Write-Warn $_.Exception.Message
    return $Fallback
  }
}

function Limit-Text {
  param(
    [string]$Text,
    [int]$MaxChars
  )

  if ([string]::IsNullOrWhiteSpace($Text)) {
    return ""
  }

  if ($Text.Length -le $MaxChars) {
    return $Text
  }

  $headSize = [Math]::Floor($MaxChars * 0.65)
  $tailSize = $MaxChars - $headSize

  $head = $Text.Substring(0, $headSize)
  $tail = $Text.Substring($Text.Length - $tailSize, $tailSize)

  return @"
$head

...[CONTEUDO TRUNCADO PARA CABER NO CONTEXTO DO MODELO]...

$tail
"@
}

function Limit-Lines {
  param(
    [string]$Text,
    [int]$MaxLines
  )

  if ([string]::IsNullOrWhiteSpace($Text)) {
    return ""
  }

  $lines = $Text -split "`r?`n"
  if ($lines.Count -le $MaxLines) {
    return $Text
  }

  $kept = $lines[0..($MaxLines - 1)]
  Write-DebugLog -Message "Texto truncado por linhas" -Data @{
    originalLines = $lines.Count
    maxLines = $MaxLines
  }
  return (($kept -join "`n") + "`n... [LINHAS TRUNCADAS]")
}

function Assert-GitRepository {
  try {
    $inside = Invoke-GitCommand -Arguments @("rev-parse", "--is-inside-work-tree")

    if ([string]::IsNullOrWhiteSpace($inside)) {
      throw "Git nao retornou confirmacao de repositorio."
    }

    if ($inside.Trim() -ne "true") {
      throw "Diretorio atual nao e um repositorio Git."
    }
  } catch {
    throw "Execute este script dentro de um repositorio Git. Detalhes: $($_.Exception.Message)"
  }
}

try {
  $scriptStartedAt = Get-Date
  Write-DebugLog -Message "Inicio da execucao do script" -Data @{
    workingDirectory = (Get-Location).Path
    model = $Model
    ollamaHost = $OllamaHost
    ollamaPort = $OllamaPort
    includeDiffBody = [bool]$IncludeDiffBody
    includeUntrackedNames = [bool]$IncludeUntrackedNames
    numCtx = $NumCtx
    numPredict = $NumPredict
  }

  Assert-GitRepository

  $ollamaUrl = "http://$OllamaHost`:$OllamaPort/api/chat"
  Write-DebugLog -Message "Repositorio Git validado"

  Write-Info "Coletando contexto do repositorio Git..."

  $branch = Get-GitValue -Arguments @("rev-parse", "--abbrev-ref", "HEAD")
  $repoRoot = Get-GitValue -Arguments @("rev-parse", "--show-toplevel")
  $status = Get-GitValue -Arguments @("status", "--short")
  $lastCommits = Get-GitValue -Arguments @(
    "log",
    "-$MaxRecentCommits",
    "--pretty=format:%h %s"
  )

  $diffNameOnly = Get-GitValue -Arguments @("diff", "--name-only")
  $diffCachedNameOnly = Get-GitValue -Arguments @("diff", "--cached", "--name-only")

  $diffStat = Get-GitValue -Arguments @("diff", "--shortstat")
  $diffCachedStat = Get-GitValue -Arguments @("diff", "--cached", "--shortstat")

  $diff = ""
  $diffCached = ""
  if ($IncludeDiffBody) {
    $diff = Get-GitValue -Arguments @(
      "diff",
      "--",
      ".",
      ":!package-lock.json",
      ":!pnpm-lock.yaml",
      ":!yarn.lock",
      ":!dist",
      ":!build",
      ":!.next",
      ":!node_modules"
    )

    $diffCached = Get-GitValue -Arguments @(
      "diff",
      "--cached",
      "--",
      ".",
      ":!package-lock.json",
      ":!pnpm-lock.yaml",
      ":!yarn.lock",
      ":!dist",
      ":!build",
      ":!.next",
      ":!node_modules"
    )
  }

  $untrackedFiles = ""
  if ($IncludeUntrackedNames) {
    $untrackedFiles = Get-GitValue -Arguments @("ls-files", "--others", "--exclude-standard")
  }

  if (
    [string]::IsNullOrWhiteSpace($status) -and
    [string]::IsNullOrWhiteSpace($diff) -and
    [string]::IsNullOrWhiteSpace($diffCached)
  ) {
    Write-Warn "Nenhuma alteracao detectada no repositorio."
  }

  Write-DebugLog -Message "Resumo do contexto coletado" -Data @{
    branch = $branch
    repoRoot = $repoRoot
    statusLength = if ($null -eq $status) { 0 } else { $status.Length }
    recentCommitsLength = if ($null -eq $lastCommits) { 0 } else { $lastCommits.Length }
    diffNameOnlyLength = if ($null -eq $diffNameOnly) { 0 } else { $diffNameOnly.Length }
    diffCachedNameOnlyLength = if ($null -eq $diffCachedNameOnly) { 0 } else { $diffCachedNameOnly.Length }
    diffStatLength = if ($null -eq $diffStat) { 0 } else { $diffStat.Length }
    diffCachedStatLength = if ($null -eq $diffCachedStat) { 0 } else { $diffCachedStat.Length }
    untrackedLength = if ($null -eq $untrackedFiles) { 0 } else { $untrackedFiles.Length }
  }

  $limitedStatus = Limit-Lines -Text $status -MaxLines $MaxStatusLines
  $limitedDiffNameOnly = Limit-Lines -Text $diffNameOnly -MaxLines $MaxFileLines
  $limitedDiffCachedNameOnly = Limit-Lines -Text $diffCachedNameOnly -MaxLines $MaxFileLines
  $limitedDiffStat = Limit-Lines -Text $diffStat -MaxLines $MaxFileLines
  $limitedDiffCachedStat = Limit-Lines -Text $diffCachedStat -MaxLines $MaxFileLines
  $limitedUntrackedFiles = Limit-Lines -Text $untrackedFiles -MaxLines $MaxFileLines

  $limitedDiff = ""
  if ($IncludeDiffBody) {
    $combinedDiff = @"
DIFF NAO STAGED:
$diff

DIFF STAGED:
$diffCached
"@

    $limitedDiff = Limit-Text -Text $combinedDiff -MaxChars $MaxDiffChars
  }

  Write-DebugLog -Message "Contexto resumido apos truncamento" -Data @{
    limitedStatusLength = $limitedStatus.Length
    limitedDiffNameOnlyLength = $limitedDiffNameOnly.Length
    limitedDiffCachedNameOnlyLength = $limitedDiffCachedNameOnly.Length
    limitedDiffStatLength = $limitedDiffStat.Length
    limitedDiffCachedStatLength = $limitedDiffCachedStat.Length
    limitedDiffLength = $limitedDiff.Length
  }

  $prompt = @"
Gere uma mensagem de commit em portugues do Brasil usando Conventional Commits.

Regras:
- responda somente com a mensagem final
- sem markdown, sem explicacoes
- primeira linha no formato tipo(escopo): descricao curta
- use escopo apenas se estiver claro
- seja especifico
- se precisar de detalhes extras, use poucas linhas com "- "

Tipos possiveis: feat, fix, refactor, docs, style, test, chore, build, ci, perf.

Contexto:
- branch: $branch
- raiz: $repoRoot

Commits recentes:
$lastCommits

Status:
$limitedStatus

Arquivos nao staged:
$limitedDiffNameOnly

Arquivos staged:
$limitedDiffCachedNameOnly

Arquivos nao rastreados:
$limitedUntrackedFiles

Diff stat nao staged:
$limitedDiffStat

Diff stat staged:
$limitedDiffCachedStat

Diff opcional:
$limitedDiff
"@

  $body = @{
    model = $Model
    stream = $false
    messages = @(
      @{
        role = "system"
        content = "Voce cria mensagens de commit curtas e precisas com Conventional Commits. Responda apenas com a mensagem final."
      },
      @{
        role = "user"
        content = $prompt
      }
    )
    options = @{
      temperature = 0
      num_ctx = $NumCtx
      num_predict = $NumPredict
      top_p = 0.9
      stop = @(
        "<|start_header_id|>",
        "<|end_header_id|>",
        "<|eot_id|>"
      )
    }
  } | ConvertTo-Json -Depth 20

  Write-DebugLog -Message "Payload preparado para o Ollama" -Data @{
    url = $ollamaUrl
    model = $Model
    bodyLength = $body.Length
    promptLength = $prompt.Length
    numCtx = $NumCtx
    numPredict = $NumPredict
    hasDiffBody = [bool]$IncludeDiffBody
  }

  Write-Info "Enviando contexto para Ollama em $ollamaUrl usando o modelo $Model..."

  $requestStartedAt = Get-Date

  $response = Invoke-RestMethod `
    -Uri $ollamaUrl `
    -Method Post `
    -ContentType "application/json; charset=utf-8" `
    -Body $body

  $requestDurationMs = [int]((Get-Date) - $requestStartedAt).TotalMilliseconds
  Write-DebugLog -Message "Resposta recebida do Ollama" -Data @{
    durationMs = $requestDurationMs
    hasMessage = ($null -ne $response.message)
    contentLength = if ($null -eq $response.message.content) { 0 } else { $response.message.content.Length }
    done = $response.done
    doneReason = $response.done_reason
    evalCount = $response.eval_count
    promptEvalCount = $response.prompt_eval_count
  }

  if ($null -eq $response.message -or [string]::IsNullOrWhiteSpace($response.message.content)) {
    throw "A resposta do Ollama nao retornou message.content."
  }

  $commitMessage = $response.message.content.Trim()
  Write-DebugLog -Message "Mensagem de commit gerada" -Data @{
    length = $commitMessage.Length
    totalDurationMs = [int]((Get-Date) - $scriptStartedAt).TotalMilliseconds
  }

  Write-Host ""
  Write-Host "Mensagem de commit sugerida:" -ForegroundColor Green
  Write-Host ""
  Write-Output $commitMessage
} catch {
  Write-Err $_.Exception.Message
  exit 1
}
