'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client-side'

export default function NavBar() {
  const pathname = usePathname()
  const [session, setSession] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const supabase = createClient()
    
    // Verificar o estado da sessão
    const getSession = async () => {
      setIsLoading(true)
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setIsLoading(false)
      
      // Inscrever-se para mudanças futuras na auth
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session)
        }
      )
      
      // Limpar a inscrição quando o componente for desmontado
      return () => {
        subscription.unsubscribe()
      }
    }
    
    getSession()
  }, [])
  
  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
  }
  
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold text-gray-800">
            Supabase Auth
          </Link>
        </div>
        
        <div className="flex gap-4">
          {isLoading ? (
            // Mostra um "esqueleto" durante o carregamento
            <div className="h-9 w-20 bg-gray-200 animate-pulse rounded"></div>
          ) : session ? (
            // Usuário está autenticado
            <>
              <Link 
                href="/welcome" 
                className={`px-4 py-2 rounded ${
                  pathname === '/welcome' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Minha Conta
              </Link>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              >
                Sair
              </button>
            </>
          ) : (
            // Usuário não está autenticado
            <>
              <Link 
                href="/login" 
                className={`px-4 py-2 rounded ${
                  pathname === '/login' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`px-4 py-2 rounded ${
                  pathname === '/register'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Registrar
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}