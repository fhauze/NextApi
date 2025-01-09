import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Connection {
    static sequelize = null;
    static init() {
        if (!Database.sequelize) {
            Database.sequelize = new Sequelize(
                process.env.DB,
                process.env.DB_USER,
                process.env.DB_PASSWORD,
                {
                    host: process.env.DB_HOST,
                    dialect: 'postgres',
                    port: process.env.DB_PORT || 5432,
                    logging: false,
                    define: {
                        schema: 'public',
                    },
                }
            );
        }
        return Database.sequelize;
    }

    async authenticate() {
        try {
            await this.sequelize.authenticate();
            console.log('Database connected successfully!');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    }

    static getConnection() {
        if (!Database.sequelize) {
            return this.init();
        }
        return Database.sequelize;
    }

    static async acquireLock(lockName) {
        const sequelize = this.getConnection();
        const lockKey = `lock_${lockName}`;
        try {
            const [result] = await sequelize.query(
                `SELECT pg_advisory_lock(hashtext(:lockKey));`,
                { replacements: { lockKey } }
            );
            return result;
        } catch (error) {
            console.error('Failed to acquire lock:', error);
            throw error;
        }
    }

    static async releaseLock(lockName) {
        const sequelize = this.getConnection();
        const lockKey = `lock_${lockName}`;
        try {
            const [result] = await sequelize.query(
                `SELECT pg_advisory_unlock(hashtext(:lockKey));`,
                { replacements: { lockKey } }
            );
            return result;
        } catch (error) {
            console.error('Failed to release lock:', error);
            throw error;
        }
    }
}

export default Connection;
