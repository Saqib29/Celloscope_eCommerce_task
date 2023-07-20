import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

// Connection url 
const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI, {
    dialect: 'postgres', 
})

const dbConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection to the database has been established successfully")

    } catch (error) {
        console.error("unable to connect to the database")
        console.error(error)
    }
}

export { sequelize, dbConnection}