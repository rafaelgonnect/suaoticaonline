# Aplicação de Autenticação com Next.js e Supabase

Este projeto demonstra uma implementação completa de autenticação usando Next.js (App Router) e Supabase Auth.

## Características

- 🔐 Autenticação completa (registro, login, logout)
- 🚀 App Router do Next.js com TypeScript
- 🎨 Interface responsiva com TailwindCSS
- 🛡️ Proteção de rotas via middleware
- 📱 Formulários com validação
- 🧩 Componentes reutilizáveis

## Pré-requisitos

- Node.js 18+ 
- Uma conta no Supabase com um projeto criado

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/rafaelgonnect/suaoticaonline.git
cd suaoticaonline
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Execute o arquivo `configurar-env-automatico.bat` ou crie manualmente um arquivo `.env.local` na raiz do projeto com suas credenciais do Supabase.

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse http://localhost:3000 no seu navegador.

## Fluxo de Autenticação

1. **Registro**: Acesse `/register` para criar uma conta. Os dados de usuário são armazenados no Supabase Auth.
2. **Login**: Acesse `/login` para entrar com email e senha. Os tokens de sessão são gerenciados automaticamente pela biblioteca do Supabase.
3. **Rota Protegida**: Após login, você terá acesso a `/welcome`, que exibe informações do usuário.
4. **Logout**: Clique em "Sair" para encerrar a sessão.

## Scripts Úteis

- `iniciar.bat` - Inicia o aplicativo e configura automaticamente se necessário
- `configurar-env-automatico.bat` - Configura as variáveis de ambiente com o projeto Supabase "suaoticaonline"

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.