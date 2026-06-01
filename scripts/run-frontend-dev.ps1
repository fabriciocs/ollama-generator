param(
  [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'
$frontendDir = Join-Path $ProjectRoot 'frontend'
$logDir = Join-Path $frontendDir 'logs'
$sessionLog = Join-Path $logDir 'frontend-session.log'

New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Set-Location $frontendDir

function Invoke-AndLog {
  param(
    [string]$Label,
    [string]$Command
  )

  Write-Host ''
  Write-Host "[$Label] $Command" -ForegroundColor Cyan
  "[$([DateTime]::Now.ToString('s'))] [$Label] $Command" | Tee-Object -FilePath $sessionLog -Append

  & powershell -NoProfile -Command $Command 2>&1 | Tee-Object -FilePath $sessionLog -Append
  if ($LASTEXITCODE -ne 0) {
    throw "Falha ao executar: $Command"
  }
}

Write-Host 'Frontend runner iniciado.' -ForegroundColor Green
Write-Host "Diretorio: $frontendDir" -ForegroundColor DarkGray
Write-Host "Log da sessao: $sessionLog" -ForegroundColor DarkGray

Invoke-AndLog -Label 'configure' -Command 'npm run configure'
Invoke-AndLog -Label 'install' -Command 'npm install'
Invoke-AndLog -Label 'build' -Command 'npm run build'
Invoke-AndLog -Label 'verify' -Command 'npm run verify'

Write-Host ''
Write-Host '[dev] npm run dev' -ForegroundColor Yellow
"[$([DateTime]::Now.ToString('s'))] [dev] npm run dev" | Tee-Object -FilePath $sessionLog -Append

& powershell -NoProfile -Command 'npm run dev' 2>&1 | Tee-Object -FilePath $sessionLog -Append
