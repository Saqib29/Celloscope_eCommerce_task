import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './config/dbConnection.js'
import upload from './utils/uploadMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import supplierRoutes from './routes/supplierRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

// configurations
dotenv.config()

// middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(upload.single('image'))

// database connection
dbConnection()

// Routes
app.use('/product', productRoutes)
// Additionally, two other routes were created for adding data, even though they were not explicitly mentioned in the assignment requirements
app.use('/user', userRoutes)
app.use('/supplier', supplierRoutes)
app.use('/category', categoryRoutes)
app.use('/', homeRoutes)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})


