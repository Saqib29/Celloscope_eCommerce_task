import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/db.js"
import Category from "./CategoryModel.js"
import Supplier from "./SupplierModel.js"

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        unitStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supplierId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Product',
        timestamps: true,
    }
)

// Defining foreign key associations
Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
}) 

Product.belongsTo(Supplier, {
    foreignKey: 'supplierId',
    as: 'supplier'
})


export default Product