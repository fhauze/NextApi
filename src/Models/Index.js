import  sequelize  from '../Config/db.js';
import UserModel from './User.js';

// Inisialisasi model
const models = {
    User: UserModel(sequelize, sequelize.DataTypes), // Inisialisasi dengan benar
};

// Jika ada relasi antar model, definisikan di sini
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { sequelize, models };
