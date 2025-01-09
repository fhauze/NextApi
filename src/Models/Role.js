import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Role = sequelize.define('Role', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
    }, {
      tableName: 'roles',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    });
  
    Role.associate = (models) => {
      Role.hasMany(models.User, { foreignKey: 'role_id' });
    };
  
    return Role;
  };
  