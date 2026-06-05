$ideia_de_sistema = Read-Host "Digite a ideia de um sistema";
codex exec "@C:\repos\ollama-generator\prompts-old\0-prompt.md  atue conforme o prompt no arquivo. A ideia de sistema é: '''$ideia_de_sistema'''" --skip-git-repo-check --json >> ..\logs\0-prompt.json
$session_id = ([regex]::Match((Get-Content ..\logs\0-prompt.json -Raw), '"type"\s*:\s*"thread\.started".*?"thread_id"\s*:\s*"([^"]+)"')).Groups[1].Value  
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\1-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\1-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\1.2-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\1.2-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\2-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\2-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\3-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\3-prompt.json

codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\4-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\4-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\5-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\5-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\6-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\6-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\7-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\7-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\8-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\8-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\9-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\9-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\10-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\10-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\11-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\11-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\12-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\12-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\13-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\13-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\13.1-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\13.1-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\14-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\14-prompt.json
codex exec resume $session_id "@C:\repos\ollama-generator\prompts-old\14.1-prompt.md  atue conforme o prompt no arquivo." --skip-git-repo-check --json >> ..\logs\14.1-prompt.json
