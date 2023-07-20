import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

class Supplier extends Model {}

Supplier.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        contact_email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        contact_phone: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Supplier',
        timestamps: true, 
    }
)

export default Supplier