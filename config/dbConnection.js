import { sequelize } from "./db.js"
import User from "../models/UserModel.js"
import Product from "../models/ProductModel.js"
import Category from "../models/CategoryModel.js"
import Supplier from "../models/SupplierModel.js"

const dbConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection to the database has been established successfully")
        syncModels()
            .then(() => {
                console.log("Models are synced")
            })
            .catch((error) => {
                console.error('Error syncing models:', error)
            })

    } catch (error) {
        console.error("unable to connect to the database")
        console.error(error)
    }
}

const syncModels = async () => {
    try{
        await sequelize.sync({ alter: true })
    } catch(error) {
        console.log("Error creating tables: ", error)
    }
}

export { dbConnection }