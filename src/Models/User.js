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
        },
        {
            tableName: 'users',
            timestamps: true,
        }
    );

    return User;
};