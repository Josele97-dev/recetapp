function RecipeDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex items-center">
          <div className="h-10 w-24 bg-white/30 rounded-full animate-pulse" />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 animate-pulse">

          <div className="w-full h-80 bg-gray-200 rounded-2xl mb-8" />

          <div className="flex justify-between items-center mb-4">
            <div className="h-8 bg-gray-200 rounded w-1/2" />
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>

          <div className="h-6 bg-gray-200 rounded w-24 mb-6" />

          <div className="space-y-2 mb-10">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>

          <div className="h-6 bg-gray-200 rounded w-32 mb-4" />
          <div className="space-y-2 mb-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-3/4" />
            ))}
          </div>

          <div className="h-6 bg-gray-200 rounded w-24 mb-4" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeDetailSkeleton