import { Router } from 'express'
const router = Router();
import { getUsers, getUser, getUserStats, updateUser, deleteUser } from '../controllers/UserController.js'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../../config/JWT.js'
router.get('/', verifyTokenAndAdmin, getUsers)
router.get('/find/:userId', verifyTokenAndAdmin, getUser)
router.get('/stats', verifyTokenAndAdmin, getUserStats)
router.put('/:userId', verifyTokenAndAuthorization, updateUser)
router.delete('/:userId', verifyTokenAndAuthorization, deleteUser)

export default router;