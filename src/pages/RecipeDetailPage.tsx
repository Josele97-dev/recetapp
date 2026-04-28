import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFavoritas } from '../context/FavoritasContext'
import FavoriteButton from '../components/FavoriteButton'
import RecipeDetailSkeleton from '../components/RecipeDetailSkeleton'
import { useRecetaDetalle } from '../hooks/useRecetaDetalle'

function RecipeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { esFavorita, agregarFavorita, quitarFavorita } = useFavoritas()

  const { receta, loading, error } = useRecetaDetalle(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (loading) return <RecipeDetailSkeleton />

  if (error || !receta || !receta.id) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">

        <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
          <div className="bg-white shadow-xl rounded-full p-8 mb-6">
            <span className="text-7xl">🍽️</span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Receta no encontrada
          </h2>

          <p className="text-gray-600 text-lg max-w-md mb-8">
            La receta que buscas no existe, ha sido eliminada o el enlace es incorrecto.
          </p>

          <button
            onClick={() => navigate('/')}
            className="bg-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-orange-600 transition cursor-pointer"
          >
            Volver al inicio
          </button>
        </div>

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

  const favorita = esFavorita(receta.id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">

      <header className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium hover:bg-white/30 transition shadow cursor-pointer"
          >
            <span className="text-xl">←</span> Volver al menú principal
          </button>

          <div className="flex items-center gap-3">

            <button
              onClick={() => navigate(`/receta/${Number(id) - 1}`)}
              disabled={Number(id) <= 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition shadow cursor-pointer
                ${Number(id) <= 1
                  ? 'bg-white/10 text-white/50 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
                }`}
            >
              <span className="text-xl">⬅</span> Anterior
            </button>

            <button
              onClick={() => navigate(`/receta/${Number(id) + 1}`)}
              disabled={Number(id) >= 30}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition shadow cursor-pointer
                ${Number(id) >= 30
                  ? 'bg-white/10 text-white/50 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
                }`}
            >
              Siguiente <span className="text-xl">➡</span>
            </button>

          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10 flex-grow">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">

          <div className="overflow-hidden rounded-2xl shadow-lg mb-8">
            <img
              src={receta.imagen}
              alt={receta.nombre}
              className="w-full max-h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              {receta.nombre}
            </h1>
            <FavoriteButton
              esFavorita={favorita}
              onClick={() =>
                favorita ? quitarFavorita(receta.id) : agregarFavorita(receta.id)
              }
            />
          </div>

          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            {receta.categoria}
          </span>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            {receta.descripcion}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
              Ingredientes
            </h2>
            <ul className="space-y-2">
              {receta.ingredientes.map((ing, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-700 text-base">{ing}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
              Pasos
            </h2>
            <ol className="space-y-5">
              {receta.pasos.map((paso, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 flex items-center justify-center bg-orange-600 text-white rounded-full text-sm font-bold shadow">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed text-base">{paso}</p>
                </li>
              ))}
            </ol>
          </section>

        </div>
      </div>

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

export default RecipeDetailPage