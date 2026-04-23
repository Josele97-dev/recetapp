import RecipeSkeleton from './RecipeSkeleton'

function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-3">
      <header className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-5 shadow-md">
        <h1 className="text-5xl font-extrabold text-center tracking-tight drop-shadow">
          RecetApp
        </h1>
        <p className="text-center text-white/90 text-lg mt-2">
          Encuentra recetas rápidas, fáciles y deliciosas
        </p>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="mb-6 flex justify-between items-center">
          <div className="w-full h-10 bg-gray-200 rounded-full animate-pulse" />
          <div className="flex items-center gap-2 ml-4">
            <div className="h-10 w-36 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-10 w-36 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-10 w-36 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>

        <div className="mb-8 flex gap-2 flex-wrap">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <RecipeSkeleton key={i} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeSkeleton