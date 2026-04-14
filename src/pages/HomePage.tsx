import useRecetas from '../hooks/useRecetas'
import { useFavoritas } from '../context/FavoritasContext'
import RecipeCard from '../components/RecipeCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'

const CATEGORIAS = ['Postres', 'Entrantes', 'Carnes', 'Pasta', 'Ensaladas', 'Sopas']

function HomePage() {
  const { recetas, loading, error, categoria, busqueda, handleCategoriaChange, handleBusquedaChange } = useRecetas()
  const { } = useFavoritas()
  const navigate = useNavigate()

  if (loading) return <p className="text-center mt-10">Cargando recetas...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">RecetApp</h1>

      <div className="mb-4">
        <SearchBar valor={busqueda} onChange={handleBusquedaChange} />
      </div>

      <div className="mb-6">
        <FilterBar
          categorias={CATEGORIAS}
          categoriaActiva={categoria}
          onCategoriaChange={handleCategoriaChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recetas.map((receta) => (
          <div key={receta.id} onClick={() => navigate(`/receta/${receta.id}`)}>
            <RecipeCard
              id={receta.id}
              nombre={receta.nombre}
              descripcion={receta.descripcion}
              imagen={receta.imagen}
              categoria={receta.categoria}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage