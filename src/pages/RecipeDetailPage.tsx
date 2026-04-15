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
    <div className="min-h-screen bg-gray-100">

     <header className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 shadow-md mb-6">
   <div className="max-w-5xl mx-auto px-4 flex items-center">
     <button
       onClick={() => navigate(-1)}
       className="
         flex items-center gap-2
          bg-white backdrop-blur-sm
          px-4 py-2 rounded-full
          text-black font-medium
          shadow hover:bg-white/30 transition
        "
      >
       <span className="text-xl">←</span> Volver
      </button>
    </div>
  </header>


      <div className="max-w-5xl mx-auto px-4 pb-10 bg-white shadow-md rounded-xl p-6">

        <img
          src={receta.imagen}
          alt={receta.nombre}
          className="w-full max-h-72 object-cover rounded-xl shadow mb-6"
        />

        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800">{receta.nombre}</h1>

          <FavoriteButton
            esFavorita={favorita}
            onClick={() =>
              favorita
                ? quitarFavorita(receta.id)
                : agregarFavorita(receta.id)
            }
          />
        </div>

        <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {receta.categoria}
        </span>

        <p className="text-gray-700 mt-3 mb-8 text-lg leading-relaxed">
          {receta.descripcion}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {receta.ingredientes.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Pasos</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
            {receta.pasos.map((paso, i) => (
              <li key={i}>{paso}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}

export default RecipeDetailPage
