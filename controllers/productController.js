import Category from "../models/CategoryModel.js"
import Product from "../models/ProductModel.js"
import Supplier from "../models/SupplierModel.js"

const createProduct = async (req, res) => {
    try{
        const { name, price, description, unitStock, categoryId, supplierId, image } = req.body

        const newProduct = await Product.create({
            name,
            price,
            description,
            unitStock,
            categoryId,
            supplierId,
            image
        })
        res.json(newProduct)
    } catch (error) {
        console.error('Error creating product:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


const getProductById = async (req, res) => {
    try {
        const productId = req.params.id
    
        const product = await Product.findOne({
            // including the associated category and supplier data in the result
            where: { id: productId },
            include: [
                { model: Category, as: 'category' },
                { model: Supplier, as: 'supplier' },
            ]
        })
    
        if (!product) {
          return res.status(404).json({ error: 'Product not found' })
        }
    
        res.render('product/product_details', { title: product.name, product: product })
        // res.json(product)
      } catch (error) {
        console.error(`Error retrieving product by ID: `, error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
}

export { createProduct, getProductById }