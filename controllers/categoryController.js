import { validationResult } from "express-validator"
import Category from "../models/CategoryModel.js"

const addCategory = async (req, res) => {
    try {
        if (req.method == 'GET') {
            res.render('supplierandCategory/category', { title: 'Category', errors: [], inputValues: {} })
        } else if(req.method == 'POST' ) {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.render('supplierandCategory/category', {
                    title: 'Add Category',
                    errors: errors.array(),
                    inputValues: req.body,
                })
            }

            const { name } = req.body
            const newCategory = await Category.create({
                name,
            })
            res.redirect('/')
        }
    } catch (error) {
        console.error('Error adding category:', error)
        res.status(500).json({ error: 'An error occurred while adding the category.' })
    }

}

export { addCategory }
