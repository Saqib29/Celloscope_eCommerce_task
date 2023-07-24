import express from 'express'
import { addSupplier } from '../controllers/supplierController.js'
import { supplierValidationRules } from '../utils/validation.js'

const router = express.Router()

router.route('/add_supplier')
    .get(addSupplier)
    .post(supplierValidationRules, addSupplier)

export default router
