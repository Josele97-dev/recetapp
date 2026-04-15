import RecipeCard from '../components/RecipeCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import useRecetas from '../hooks/useRecetas'

const CATEGORIAS = ['Postres', 'Entrantes', 'Carnes', 'Pasta', 'Ensaladas', 'Sopas']

function HomePage() {
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

  if (loading) return <p className="text-center mt-10">Cargando recetas...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

  const irARecetaAleatoria = () => {
    const r = recetaAleatoria()
    if (!r) return
    window.location.href = `/receta/${r.id}`
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-3">

      <header className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-5 shadow-md">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          RecetApp
        </h1>
        <p className="text-center text-white/90 text-sm mt-1">
          Encuentra recetas rápidas, fáciles y deliciosas
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="mb-6 flex justify-between items-center">
          <SearchBar valor={busqueda} onChange={handleBusquedaChange} />

          <div className="flex items-center">

            <button
              onClick={toggleFavoritas}
              className={`ml-4 px-4 py-2 rounded-lg font-medium transition ${
                mostrarFavoritas
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              ❤️ Favoritas
            </button>

            <button
              onClick={toggleOrden}
              className="
                ml-4 px-4 py-2 rounded-lg font-medium transition
                bg-white text-gray-700 border border-gray-300
                hover:bg-gray-100
              "
            >
              {orden === "az" ? "Orden: Z–A" : "Orden: A–Z"}
            </button>

            <button
              onClick={irARecetaAleatoria}
              className="
                ml-4 px-4 py-2 rounded-lg font-medium transition
                bg-orange-500 text-white shadow-md hover:bg-orange-600
              "
            >
              🎲 Aleatoria
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

          {recetas.length === 0 && (
            <p className="text-center text-gray-500 col-span-4 mt-6">
              No se han encontrado recetas
            </p>
          )}
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

export default HomePage
