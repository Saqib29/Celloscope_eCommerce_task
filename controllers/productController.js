import Category from "../models/CategoryModel.js"
import Product from "../models/ProductModel.js"
import Supplier from "../models/SupplierModel.js"

const createProduct = async (req, res) => {
    try{
        if(req.method == 'GET') {
            res.render('product/prodcutCreate', { title: 'Create Product' })
        } else if (req.method == 'POST') {
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
        }
        
    } catch (error) {
        console.error('Error creating product:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const { name, price, description, unitStock, image } = req.body

        const product = await Product.findByPk(productId)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        product.name = name
        product.price = price
        product.description = description
        product.unitStock = unitStock
        product.image = image

        await product.save()

        res.redirect(`/product/details/${productId}`)
    } catch (error) {
        console.error(`Error updating product: `, error)
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
    
        res.render('product/productDetails', { title: product.name, product: product })
        // res.json(product)
      } catch (error) {
        console.error(`Error retrieving product by ID: `, error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findOne({ where: { id: productId } })

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        await product.destroy()

        res.status(200).json({ message: "deleted successfulyy"})

    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export { createProduct, getProductById, updateProduct, deleteProduct }