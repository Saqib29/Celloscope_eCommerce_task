import express from 'express'
import { createProduct, deleteProduct, getProductById, updateProduct } from '../controllers/productController.js'

const router = express.Router();

router.route('/details/:id').get(getProductById)
router.route('/update/:id').post(updateProduct)
router.route('/create')
    .get(createProduct)
    .post(createProduct)
router.route('/delete/:id').delete(deleteProduct)

export default router
