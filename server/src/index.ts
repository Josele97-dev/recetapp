import express from 'express'
import cors from 'cors'
import recetasRouter from './routes/recetas.routes'
import favoritasRouter from './routes/favoritas.routes'

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(cors({
  origin: [
    'https://recetapp-rho.vercel.app',
    'http://localhost:5173'
  ]
}))
app.use(express.json())

app.use('/api/v1/recetas', recetasRouter)
app.use('/api/v1/favoritas', favoritasRouter)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})