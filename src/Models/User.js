import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const User = sequelize.define('User', {
      google_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }, {
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    User.associate = (models) => {
      User.belongsTo(models.Role, { foreignKey: 'role_id' });
      User.hasOne(models.UserProfile, { foreignKey: 'user_id' });
    };
  
    return User;
  };
  