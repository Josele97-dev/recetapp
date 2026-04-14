interface Props {
  categorias: string[]
  categoriaActiva: string
  onCategoriaChange: (categoria: string) => void
}

function FilterBar({ categorias, categoriaActiva, onCategoriaChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          categoriaActiva === 'Todas'
            ? 'bg-orange-400 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        onClick={() => onCategoriaChange('Todas')}
      >
        Todas
      </button>
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            categoriaActiva === categoria
              ? 'bg-orange-400 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => onCategoriaChange(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FilterBar