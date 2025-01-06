import  sequelize  from '../Config/db.js';
import Inventory from './Inventory.js';
import Product from './Product.js';
import Role from './Role.js';
import Transaction from './Transaction,js';
import User from './User.js';
import UserProfile from './UserProfile.js';
import Warehouse from './Warehouse.js';

// Inisialisasi model
const models = {
    Role: Role(sequelize,sequelize.DataTypes),
    User: User(sequelize, sequelize.DataTypes),
    UserProfile: UserProfile(sequelize,sequelize.DataTypes),
    Product: Product(sequelize, sequelize.DataTypes),
    Inventory: Inventory(sequelize,sequelize.DataTypes),
    Transaction: Transaction(sequelize, sequelize.DataTypes),
    Warehouse: Warehouse(sequelize, sequelize.DataTypes),
};

// Jika ada relasi antar model, definisikan di sini
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { sequelize, models };
