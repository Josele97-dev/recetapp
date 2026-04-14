import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFavoritas } from '../context/FavoritasContext'
import FavoriteButton from '../components/FavoriteButton'

interface Receta {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
  ingredientes: string[]
  pasos: string[]
}

function RecipeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { esFavorita, agregarFavorita, quitarFavorita } = useFavoritas()
  const [receta, setReceta] = useState<Receta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/recetas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReceta(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Error al cargar la receta')
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="text-center mt-10">Cargando receta...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>
  if (!receta) return null

  const favorita = esFavorita(receta.id)

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-500 hover:text-gray-800"
      >
        ← Volver
      </button>

      <img src={receta.imagen} alt={receta.nombre} className="w-full h-64 object-cover rounded-xl mb-6" />

      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">{receta.nombre}</h1>
        <FavoriteButton
          esFavorita={favorita}
          onClick={() => favorita ? quitarFavorita(receta.id) : agregarFavorita(receta.id)}
        />
      </div>

      <span className="text-xs text-white bg-orange-400 rounded-full px-2 py-1">{receta.categoria}</span>
      <p className="text-gray-500 mt-3 mb-6">{receta.descripcion}</p>

      <h2 className="text-lg font-semibold mb-2">Ingredientes</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {receta.ingredientes.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mb-2">Pasos</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        {receta.pasos.map((paso, i) => (
          <li key={i}>{paso}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetailPage