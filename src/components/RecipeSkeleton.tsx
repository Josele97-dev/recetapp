function RecipeSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-5 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-8 bg-gray-200 rounded w-1/3 mt-2" />
      </div>
    </div>
  )
}

export default RecipeSkeleton