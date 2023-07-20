import Category from "../models/CategoryModel.js"

const addCategory = async (req, res) => {
    try {
        const { name } = req.body

        const newCategory = await Category.create({
            name,
        })
        res.status(201).json(newCategory)
    } catch (error) {
        console.error('Error adding category:', error)
        res.status(500).json({ error: 'An error occurred while adding the category.' })
    }

}

export { addCategory }
