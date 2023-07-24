import express from 'express'
import { addSupplier } from '../controllers/supplierController.js'

const router = express.Router()

router.route('/add_supplier')
    .get(addSupplier)
    .post(addSupplier)

export default router
