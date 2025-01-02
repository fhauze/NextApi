import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const User = sequelize.define(
        'User',  // Nama model
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            google_id: {
                type: String
            },
            picture: {
                type: String
            },
            createdAt: {
                type: Date, default: Date.now
            },
            updatedAt: {
                type: Date, default: Date.now
            }
        },
        {
            tableName: 'users',
            timestamps: true,
        }
    );

    return User;
};