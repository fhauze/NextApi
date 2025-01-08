import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Transaction = sequelize.define('Transaction', {
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Warehouse',
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    transaction_type: {
      type: DataTypes.ENUM('IN', 'OUT', 'MOVE'),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Adjust if user_id should be required
      references: {
        model: 'users', // Ensure you have a 'users' table and model
        key: 'id',
      },
    },
    target_warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Adjust if this field is required
      references: {
        model: 'warehouse',
        key: 'id',
      },
    },
  }, {
    schema: 'public',
    tableName: 'transactions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Warehouse, { foreignKey: 'warehouse_id' });
    Transaction.belongsTo(models.Product, { foreignKey: 'product_id' });
    Transaction.belongsTo(models.User, { foreignKey: 'user_id' });
    Transaction.belongsTo(models.Warehouse, { foreignKey: 'target_warehouse_id', as: 'TargetWarehouse' });
  };

  return Transaction;
};
