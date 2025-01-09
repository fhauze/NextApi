import { DataTypes } from 'sequelize';
import sequelize from '../database/connection'; // adjust based on your project structure

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Assuming you have a `User` model
      key: 'id',
    },
  },
  inventory_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Inventory', // Assuming you have an `Inventory` model
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // quantity must be at least 1
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'Carts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true, // Enable automatic timestamp fields
  paranoid: true, // Enable soft delete (deletedAt field)
});

// Associations (if necessary)
Cart.associate = (models) => {
  Cart.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  Cart.belongsTo(models.Inventory, { foreignKey: 'inventory_id', as: 'inventory' });
};

export default Cart;
