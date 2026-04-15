import { Router } from 'express'
import { getFavoritas, addFavorita, deleteFavorita } from '../controllers/favoritas.controller'

const router = Router()

router.get('/', getFavoritas)
router.post('/:id', addFavorita)
router.delete('/:id', deleteFavorita)

export default router