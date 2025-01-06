import { DataTypes } from 'sequelize';
export default (sequelize) => {
    const UserProfile = sequelize.define('UserProfile', {
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.TEXT,
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      avatar_url: {
        type: DataTypes.TEXT,
      },
    }, {
      tableName: 'user_profiles',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    UserProfile.associate = (models) => {
      UserProfile.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return UserProfile;
  };
  