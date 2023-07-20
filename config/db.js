import { Sequelize } from "sequelize"
import dotenv from 'dotenv'


dotenv.config()

// Connection url 
const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI, {
    dialect: 'postgres', 
    logging: process.env.NODE_ENV == 'development' ? true : false
})


export { sequelize }