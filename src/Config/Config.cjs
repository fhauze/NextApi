require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        logging: false,
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TEST,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        logging: false,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_PRODUCTION,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        logging: false,
    },
};
