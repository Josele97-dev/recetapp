interface Props {
  categorias: string[]
  categoriaActiva: string
  onCategoriaChange: (categoria: string) => void
}

const EMOJIS: Record<string, string> = {
  Postres: "🍰",
  Entrantes: "🥗",
  Carnes: "🍖",
  Pasta: "🍝",
  Ensaladas: "🥬",
  Sopas: "🍲",
}

function FilterBar({ categorias, categoriaActiva, onCategoriaChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">

      {/* BOTÓN TODAS */}
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          categoriaActiva === 'Todas'
            ? 'bg-orange-400 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onCategoriaChange('Todas')}
      >
        Todas
      </button>

      {/* BOTONES DE CATEGORÍAS */}
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            categoriaActiva === categoria
              ? 'bg-orange-400 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onCategoriaChange(categoria)}
        >
          <span className="mr-1">{EMOJIS[categoria]}</span>
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
