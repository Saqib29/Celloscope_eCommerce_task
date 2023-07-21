import express from 'express'
import { createProduct, getProductById } from '../controllers/productController.js'

const router = express.Router();

router.route('/details/:id').get(getProductById)
router.route('/create').post(createProduct)

export default router
