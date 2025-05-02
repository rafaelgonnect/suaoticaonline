import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Verificar se as variáveis de ambiente estão definidas
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Credenciais do Supabase não configuradas. Execute o arquivo "configurar-env.bat" e reinicie o servidor.')
    return NextResponse.redirect(new URL('/', request.url))
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            // Se estiver definindo o cookie, atualizar também o objeto `request` para evitar inconsistências no próximo middleware
            request.cookies.set({
              name,
              value,
              ...options,
            })
            // Definir o cookie no objeto `response`
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: CookieOptions) {
            // Se estiver removendo o cookie, atualizar também o objeto `request` para evitar inconsistências no próximo middleware
            request.cookies.delete(name)
            // Definir o cookie no objeto `response`
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    // Atualiza as sessões e refresca token
    await supabase.auth.getSession()

    // Protege as rotas privadas
    const { pathname } = request.nextUrl
    
    // Rotas que requerem autenticação
    const protectedRoutes = ['/welcome']
    
    // Rotas que não devem ser acessadas quando autenticado
    const authRoutes = ['/login', '/register']
    
    // Verificar se é uma rota protegida
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
    
    // Verificar se é uma rota de autenticação
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
    
    // Obter dados da sessão
    const { data: { session } } = await supabase.auth.getSession()
    
    // Redirecionamentos de acordo com o estado da autenticação
    if (isProtectedRoute && !session) {
      // Redireciona para login se tentar acessar rota protegida e não estiver logado
      const redirectUrl = new URL('/login', request.url)
      redirectUrl.searchParams.set('redirectedFrom', pathname)
      return NextResponse.redirect(redirectUrl)
    }
    
    if (isAuthRoute && session) {
      // Redireciona para welcome se tentar acessar login/register estando logado
      return NextResponse.redirect(new URL('/welcome', request.url))
    }
  } catch (error) {
    console.error('Erro no middleware:', error)
    // Em caso de erro, permitir acesso à página inicial
    if (request.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  
  return response
}

// Configuração das rotas onde o middleware será executado
export const config = {
  matcher: [
    /*
     * Corresponde a todas as rotas exceto:
     * - Arquivos com extensão (_next/static, _next/image, favicon.ico, etc.)
     * - Rotas da API
     */
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
}