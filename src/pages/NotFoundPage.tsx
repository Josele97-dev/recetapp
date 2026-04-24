import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">

      {/* CONTENIDO CENTRAL */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
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

      {/* FOOTER */}
      <footer className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} RecetApp
          </p>
          <p className="text-xs opacity-70 mt-1">
            Recetas rápidas, fáciles y deliciosas para tu día a día
          </p>
        </div>
      </footer>

    </div>
  )
}

export default NotFoundPage
