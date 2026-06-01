param(
  [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'
$backendDir = Join-Path $ProjectRoot 'backend'
$logDir = Join-Path $backendDir 'logs'
$sessionLog = Join-Path $logDir 'backend-session.log'

New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Set-Location $backendDir

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

Write-Host 'Backend runner iniciado.' -ForegroundColor Green
Write-Host "Diretorio: $backendDir" -ForegroundColor DarkGray
Write-Host "Log da sessao: $sessionLog" -ForegroundColor DarkGray

Invoke-AndLog -Label 'configure' -Command 'npm run configure'
Invoke-AndLog -Label 'install' -Command 'npm install'
Invoke-AndLog -Label 'build' -Command 'npm run build'
Invoke-AndLog -Label 'verify' -Command 'npm run verify'

Write-Host ''
Write-Host '[start:dev] npm run start:dev' -ForegroundColor Yellow
"[$([DateTime]::Now.ToString('s'))] [start:dev] npm run start:dev" | Tee-Object -FilePath $sessionLog -Append

& powershell -NoProfile -Command 'npm run start:dev' 2>&1 | Tee-Object -FilePath $sessionLog -Append
