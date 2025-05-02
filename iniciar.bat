@echo off
echo.
echo =======================================================
echo Iniciando aplicativo de autenticacao com Supabase
echo =======================================================
echo.

REM Verificar se o arquivo .env.local existe
if not exist .env.local (
  echo O arquivo .env.local nao foi encontrado.
  echo Configurando o ambiente primeiro...
  call configurar-env-automatico.bat
)

echo Iniciando o servidor Next.js...
echo.
echo Acesse http://localhost:3000 no seu navegador
echo.
echo Para parar o servidor, pressione Ctrl+C
echo =======================================================
echo.

npm run dev