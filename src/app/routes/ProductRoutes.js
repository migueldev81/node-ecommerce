import { Router } from "express";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from '../../config/JWT.js'
const router = Router();
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from '../controllers/ProductController.js'
router.get('/', verifyTokenAndAdmin, getProducts)
router.get('/:productId', getProduct)
router.post('/', addProduct)
router.put('/:productId', verifyTokenAndAdmin, updateProduct)
router.delete('/:productId', verifyTokenAndAdmin, deleteProduct)
export default router;