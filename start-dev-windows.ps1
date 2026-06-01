param(
  [string]$ProjectRoot = (Resolve-Path $PSScriptRoot).Path
)

$backendScript = Join-Path $ProjectRoot 'scripts\run-backend-dev.ps1'
$frontendScript = Join-Path $ProjectRoot 'scripts\run-frontend-dev.ps1'

if (-not (Test-Path $backendScript)) {
  throw "Script nao encontrado: $backendScript"
}

if (-not (Test-Path $frontendScript)) {
  throw "Script nao encontrado: $frontendScript"
}

Start-Process powershell.exe -ArgumentList @(
  '-NoExit',
  '-ExecutionPolicy', 'Bypass',
  '-File', $backendScript,
  '-ProjectRoot', $ProjectRoot
) -WorkingDirectory $ProjectRoot -WindowStyle Normal

Start-Process powershell.exe -ArgumentList @(
  '-NoExit',
  '-ExecutionPolicy', 'Bypass',
  '-File', $frontendScript,
  '-ProjectRoot', $ProjectRoot
) -WorkingDirectory $ProjectRoot -WindowStyle Normal

Write-Host 'Janelas de backend e frontend abertas.' -ForegroundColor Green
Write-Host 'Logs de sessao:' -ForegroundColor Cyan
Write-Host "  backend  -> $(Join-Path $ProjectRoot 'backend\logs\backend-session.log')"
Write-Host "  frontend -> $(Join-Path $ProjectRoot 'frontend\logs\frontend-session.log')"
