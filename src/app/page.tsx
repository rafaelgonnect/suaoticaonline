import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Autenticação com Next.js e Supabase
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Um exemplo completo de autenticação usando Next.js App Router e Supabase Auth
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/register"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Criar uma conta
            </Link>
            <Link
              href="/login"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </Link>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-center text-xl font-bold text-gray-900">
            Características do projeto
          </h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
            <li>Autenticação completa com Supabase Auth</li>
            <li>Middleware para proteção de rotas</li>
            <li>TypeScript e TailwindCSS</li>
            <li>Formulários responsivos e validação</li>
            <li>Layout e componentes reutilizáveis</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
