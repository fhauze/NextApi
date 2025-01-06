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
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    Role.associate = (models) => {
      Role.hasMany(models.User, { foreignKey: 'role_id' });
    };
  
    return Role;
  };
  