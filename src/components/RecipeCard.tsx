interface Props {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
}

function RecipeCard({ id, nombre, descripcion, imagen, categoria }: Props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg transition-shadow">
      <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs text-white bg-orange-400 rounded-full px-2 py-1">
          {categoria}
        </span>
        <h2 className="text-lg font-semibold mt-2">{nombre}</h2>
        <p className="text-sm text-gray-500 mt-1">{descripcion}</p>
      </div>
    </div>
  )
}

export default RecipeCard