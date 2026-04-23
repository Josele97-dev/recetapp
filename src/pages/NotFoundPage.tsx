import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <span className="text-8xl mb-6">🍳</span>
      <h1 className="text-6xl font-bold text-orange-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-gray-500 mb-6">La página que buscas no existe.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-colors cursor-pointer"
      >
        Volver al inicio
      </button>
    </div>
  )
}

export default NotFoundPage