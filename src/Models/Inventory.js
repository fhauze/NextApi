import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Inventory = sequelize.define('Inventory', {
        warehouse_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
          },
    }, {
      tableName: 'inventory',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    });
  
    Inventory.associate = (models) => {
      Inventory.belongsTo(models.Warehouse, { foreignKey: 'warehouse_id' });
      Inventory.belongsTo(models.Product, { foreignKey: 'product_id' });
    };
  
    return Inventory;
  };
  