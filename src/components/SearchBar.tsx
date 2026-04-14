interface Props {
  valor: string
  onChange: (valor: string) => void
}

function SearchBar({ valor, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar receta..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-400 text-sm"
    />
  )
}

export default SearchBar