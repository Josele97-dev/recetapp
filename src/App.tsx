import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import { FavoritasProvider } from './context/FavoritasContext'
import { RecetasProvider } from './context/RecetasContext'

function App() {
  return (
    <BrowserRouter>
      <FavoritasProvider>
        <RecetasProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/receta/:id" element={<RecipeDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RecetasProvider>
      </FavoritasProvider>
    </BrowserRouter>
  )
}

export default App