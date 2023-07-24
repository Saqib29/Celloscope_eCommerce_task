import express from 'express'
import { addCategory } from '../controllers/categoryController.js'

const router = express.Router()

router.route('/add_category')
    .get(addCategory)
    .post(addCategory)

export default router