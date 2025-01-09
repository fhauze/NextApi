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
        logging: false, 
        define: {
            schema: 'public',
        },
    }
);

sequelize.lockTransaction = async (transaction, model, id) => {
    // Using FOR UPDATE to lock the row for updates
    return await model.findOne({
      where: { id },
      lock: transaction.LOCK.UPDATE, // Lock the row for the transaction
      transaction,
    });
  };

export default sequelize;
