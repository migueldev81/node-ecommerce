import { Router } from "express";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from '../../config/JWT.js'
const router = Router();
import { getOrders, getUserOrders, getMonthlyIncome,addOrder, updateOrder, deleteOrder } from '../controllers/OrderController.js'
router.get('/', verifyTokenAndAdmin, getOrders)
router.get('/:userId', getUserOrders)
router.get('/income', getMonthlyIncome)
router.post('/', addOrder)
router.put('/:orderId', verifyTokenAndAdmin, updateOrder)
router.delete('/:orderId', verifyTokenAndAdmin, deleteOrder)
export default router;