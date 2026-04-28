import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import { RecetasProvider } from './context/RecetasContext'

function App() {
  return (
    <BrowserRouter>
      <RecetasProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/receta/:id" element={<RecipeDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RecetasProvider>
    </BrowserRouter>
  )
}

export default App
