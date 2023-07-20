import Product from "../models/ProductModel.js"

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.findAll({
            // attributes I don't want to retrieve this time
            attributes: {
                exclude: ['supplierId', 'categoryId']
            }
        })
        res.json(products)
    } catch (error) {
        console.error(`Error retrieving products: `, error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


export { getAllProducts }