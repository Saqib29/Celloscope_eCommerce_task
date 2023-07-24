import Category from "../models/CategoryModel.js"

const addCategory = async (req, res) => {
    try {
        const { name } = req.body
        console.log(name)
        if (req.method == 'GET') {
            res.render('supplierandCategory/category', { title: 'Category' })
        } else if(req.method == 'POST' ) {
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
