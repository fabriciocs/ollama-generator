param(
  [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'
$frontendDir = Join-Path $ProjectRoot 'frontend'
$logDir = Join-Path $frontendDir 'logs'
$sessionLog = Join-Path $logDir 'frontend-session.log'

New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Set-Location $frontendDir

function Write-SessionLine {
  param(
    [string]$Message
  )

  Write-Host $Message
  Add-Content -Path $sessionLog -Value $Message
}

function Invoke-NpmCommand {
  param(
    [string]$Label,
    [string]$Arguments
  )

  Write-Host ''
  Write-Host "[$Label] npm $Arguments" -ForegroundColor Cyan
  Write-SessionLine "[$([DateTime]::Now.ToString('s'))] [$Label] npm $Arguments"

  cmd.exe /d /c "npm $Arguments 2>&1" | Tee-Object -FilePath $sessionLog -Append

  if ($LASTEXITCODE -ne 0) {
    throw "Falha ao executar: npm $Arguments"
  }
}

Write-Host 'Frontend runner iniciado.' -ForegroundColor Green
Write-Host "Diretorio: $frontendDir" -ForegroundColor DarkGray
Write-Host "Log da sessao: $sessionLog" -ForegroundColor DarkGray

Invoke-NpmCommand -Label 'configure' -Arguments 'run configure'
Invoke-NpmCommand -Label 'install' -Arguments 'install'
Invoke-NpmCommand -Label 'build' -Arguments 'run build'
Invoke-NpmCommand -Label 'verify' -Arguments 'run verify'

Write-Host ''
Write-Host '[dev] npm run dev' -ForegroundColor Yellow

Invoke-NpmCommand -Label 'dev' -Arguments 'run dev'
