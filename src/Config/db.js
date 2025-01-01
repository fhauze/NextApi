import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB, // Nama database
    process.env.DB_USER, // User database
    process.env.DB_PASSWORD, // Password database
    {
        host: process.env.DB_HOST,
        dialect: 'postgres', // Dialek database
        port: process.env.DB_PORT || 5432, // Port default PostgreSQL
        logging: false, // Nonaktifkan logging jika tidak diperlukan
    }
);


export default sequelize;
