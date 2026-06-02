param(
  [string]$ProjectRoot = (Resolve-Path $PSScriptRoot).Path
)

$backendScript = Join-Path $ProjectRoot 'scripts\run-backend-dev.ps1'
$frontendScript = Join-Path $ProjectRoot 'scripts\run-frontend-dev.ps1'

function Stop-ProcessesByScript {
  param(
    [string]$ScriptPath,
    [string]$Label
  )

  $escapedPath = [Regex]::Escape($ScriptPath)
  $processes = Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -match $escapedPath }

  foreach ($process in $processes) {
    Write-Host "Encerrando runner $Label (PID $($process.ProcessId))" -ForegroundColor Yellow
    Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue
  }
}

function Stop-ProcessesByPort {
  param(
    [int]$Port,
    [string]$Label
  )

  $connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique

  foreach ($processId in $connections) {
    if ($processId -and $processId -ne 0) {
      Write-Host "Encerrando processo $Label na porta $Port (PID $processId)" -ForegroundColor Yellow
      Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    }
  }
}

if (-not (Test-Path $backendScript)) {
  throw "Script nao encontrado: $backendScript"
}

if (-not (Test-Path $frontendScript)) {
  throw "Script nao encontrado: $frontendScript"
}

Stop-ProcessesByScript -ScriptPath $backendScript -Label 'backend'
Stop-ProcessesByScript -ScriptPath $frontendScript -Label 'frontend'
Stop-ProcessesByPort -Port 3333 -Label 'backend'
Stop-ProcessesByPort -Port 5173 -Label 'frontend'

Start-Sleep -Seconds 1

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
