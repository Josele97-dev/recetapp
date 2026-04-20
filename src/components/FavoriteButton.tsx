interface Props {
  esFavorita: boolean
  onClick: (e: React.MouseEvent) => void
}

function FavoriteButton({ esFavorita, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-2xl transition-transform hover:scale-110"
    >
      {esFavorita ? '❤️' : '🤍'}
    </button>
  )
}

export default FavoriteButton