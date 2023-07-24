import express from 'express'
import { addCategory } from '../controllers/categoryController.js'
import { categoryValidationRules } from '../utils/validation.js'

const router = express.Router()

router.route('/add_category')
    .get(addCategory)
    .post(categoryValidationRules, addCategory)

export default router