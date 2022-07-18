import { Router } from "express";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from '../../config/JWT.js'
const router = Router();
import { getAllCart, getUserCart, addCart, updateCart, deleteCart } from '../controllers/CartController.js'
router.get('/', verifyTokenAndAdmin, getAllCart)
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)
router.post('/', verifyToken, addCart)
router.put('/:cartId', verifyTokenAndAuthorization, updateCart)
router.delete('/:cartId', verifyTokenAndAuthorization, deleteCart)
export default router;