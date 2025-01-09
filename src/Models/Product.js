
import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Product = sequelize.define('Product', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      sku: {
        type: DataTypes.STRING,
        unique: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    }, {
      tableName: 'products',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    });
  
    Product.associate = (models) => {
        console.log('Available models:', Object.keys(models)); // Debug log
      Product.hasMany(models.Inventory, { foreignKey: 'product_id' });
      Product.hasMany(models.Transaction, { foreignKey: 'product_id' });
    };
  
    return Product;
  };
  