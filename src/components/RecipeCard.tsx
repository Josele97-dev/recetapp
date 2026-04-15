import { Link } from 'react-router-dom'
import { useFavoritas } from '../context/FavoritasContext'

interface Props {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
}

function RecipeCard({ id, nombre, descripcion, imagen, categoria }: Props) {
  const { esFavorita, agregarFavorita, quitarFavorita } = useFavoritas()
  const favorita = esFavorita(id)

  const toggleFavorita = (e: React.MouseEvent) => {
    e.stopPropagation()
    favorita ? quitarFavorita(id) : agregarFavorita(id)
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow relative flex flex-col">

      <button
        onClick={toggleFavorita}
        className="absolute top-2 right-2 text-2xl z-10 hover:scale-110 transition"
      >
        {favorita ? (
          <span className="text-red-500">❤️</span>
        ) : (
          <span className="text-gray-300">🤍</span>
        )}
      </button>

      <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-white bg-orange-400 rounded-full px-2 py-1 self-start">
          {categoria}
        </span>

        <h2 className="text-lg font-semibold mt-2">{nombre}</h2>
        <p className="text-sm text-gray-500 mt-1 flex-1">{descripcion}</p>

        <Link
          to={`/receta/${id}`}
          className="mt-3 inline-block bg-orange-500 text-white px-3 py-2 rounded-lg font-semibold text-sm hover:bg-orange-600 transition self-start"
        >
          Ver receta
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard