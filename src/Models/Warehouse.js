import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Warehouse = sequelize.define('Warehouse', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
    }, {
      tableName: 'warehouses',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Warehouse.associate = (models) => {
      Warehouse.hasMany(models.Inventory, { foreignKey: 'warehouse_id' });
      Warehouse.hasMany(models.Transaction, { foreignKey: 'warehouse_id' });
    };
  
    return Warehouse;
  };
  