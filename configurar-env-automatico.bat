@echo off
echo.
echo =======================================================
echo Configuracao automatica de ambiente para o projeto Supabase Auth
echo =======================================================
echo.
echo Configurando as credenciais do projeto suaoticaonline...

set SUPABASE_URL=https://pbhwxkknottpmawyevzb.supabase.co
set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiaHd4a2tub3R0cG1hd3lldnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMDk3OTksImV4cCI6MjA2MTY4NTc5OX0.x9wYYcisFV1TTFn0mgtNRWE0cyoDUwh97-AVxGIo5KY
REM Nota: A chave de serviço não é obtida diretamente pela API, 
REM então você precisará copiá-la do painel do Supabase manualmente
set SUPABASE_SERVICE_KEY=sua_chave_de_servico_aqui

echo.
echo Criando arquivo .env.local com as credenciais do projeto suaoticaonline...

echo NEXT_PUBLIC_SUPABASE_URL=%SUPABASE_URL%> .env.local
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=%SUPABASE_ANON_KEY%>> .env.local
echo SUPABASE_SERVICE_KEY=%SUPABASE_SERVICE_KEY%>> .env.local

echo.
echo Arquivo .env.local criado com sucesso!
echo.
echo =======================================================
echo IMPORTANTE:
echo 1. Você pode precisar adicionar a chave de serviço (service_role) manualmente
echo    no Dashboard do Supabase: https://app.supabase.com/project/pbhwxkknottpmawyevzb/settings/api
echo 2. Reinicie o servidor Next.js se estiver em execucao
echo 3. Acesse http://localhost:3000 para testar o aplicativo
echo =======================================================
echo.
pause