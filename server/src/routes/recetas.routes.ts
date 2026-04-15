import { Router } from 'express'
import { getRecetas, getRecetaById } from '../controllers/recetas.controller'

const router = Router()

router.get('/', getRecetas)
router.get('/:id', getRecetaById)

export default router