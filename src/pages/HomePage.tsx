import RecipeCard from '../components/RecipeCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import HomeSkeleton from '../components/HomeSkeleton'
import useRecetas from '../hooks/useRecetas'
import { useNavigate } from "react-router-dom"

const CATEGORIAS = ['Postres', 'Entrantes', 'Carnes', 'Pasta', 'Ensaladas', 'Sopas']

const AppHeader = () => (
  <header className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-5 shadow-md">
    <h1 className="text-5xl font-extrabold text-center tracking-tight drop-shadow">
      RecetApp
    </h1>
    <p className="text-center text-white/90 text-lg mt-2">
      Encuentra recetas rápidas, fáciles y deliciosas
    </p>
  </header>
)

function HomePage() {
  const navigate = useNavigate()

  const {
    recetas,
    loading,
    error,
    categoria,
    busqueda,
    orden,
    mostrarFavoritas,

    handleCategoriaChange,
    handleBusquedaChange,
    toggleFavoritas,
    toggleOrden,
    recetaAleatoria,
  } = useRecetas()

  if (loading) return <HomeSkeleton />

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-4 px-3">
        <AppHeader />
        <div className="text-center mt-10">
          <p className="text-red-500 font-semibold">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 cursor-pointer"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  const irARecetaAleatoria = () => {
    const r = recetaAleatoria()
    if (!r) return
    navigate(`/receta/${r.id}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-3">

      <AppHeader />

      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="mb-6 flex justify-between items-center">

          <SearchBar valor={busqueda} onChange={handleBusquedaChange} />

          <div className="flex items-center gap-2 ml-4">

            <button
              onClick={toggleFavoritas}
              className={`
                h-10 w-36 rounded-lg font-medium transition cursor-pointer flex items-center justify-center gap-2
                ${mostrarFavoritas
                  ? 'bg-orange-400 text-white border border-orange-400 shadow-sm'
                  : 'bg-white text-orange-600 border border-orange-300 hover:bg-orange-50 shadow-sm'}
              `}
            >
              <span className="text-lg">❤️</span>
              Favoritas
            </button>

            <button
              onClick={toggleOrden}
              className="h-10 w-36 rounded-lg font-medium transition bg-white text-orange-600 border border-orange-300 hover:bg-orange-50 shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              {orden === "none" && <><span className="text-lg">🔀</span> Sin orden</>}
              {orden === "az" && <><span className="text-lg">🔼</span> A‑Z</>}
              {orden === "za" && <><span className="text-lg">🔽</span> Z‑A</>}
            </button>

            <button
              onClick={irARecetaAleatoria}
              className="h-10 w-36 rounded-lg font-semibold transition bg-white text-orange-600 border border-orange-300 hover:bg-orange-50 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="text-lg">🎲</span>
              Aleatoria
            </button>

          </div>
        </div>

        <div className="mb-8">
          <FilterBar
            categorias={CATEGORIAS}
            categoriaActiva={categoria}
            onCategoriaChange={handleCategoriaChange}
          />
        </div>

        {mostrarFavoritas && recetas.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              No tienes recetas favoritas aún
            </h2>
            <p className="text-gray-600 mb-6">
              Marca recetas como favoritas para verlas aquí
            </p>
            <button
              onClick={toggleFavoritas}
              className="px-5 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition cursor-pointer"
            >
              Volver a todas las recetas
            </button>
          </div>
        )}

        {!mostrarFavoritas || recetas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recetas.map((receta) => (
              <RecipeCard
                key={receta.id}
                id={receta.id}
                nombre={receta.nombre}
                descripcion={receta.descripcion}
                imagen={receta.imagen}
                categoria={receta.categoria}
              />
            ))}
          </div>
        ) : null}

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

export default HomePage