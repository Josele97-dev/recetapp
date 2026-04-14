import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FavoritasProvider } from './context/FavoritasContext'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritasProvider>
      <App />
    </FavoritasProvider>
  </StrictMode>
)