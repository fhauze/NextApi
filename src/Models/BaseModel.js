import { Model } from 'sequelize';
import sequelize from '../config/database.js';

class BaseModel extends Model {
    static init(attributes, options) {
        return super.init(attributes, { ...options, sequelize }); // Menggunakan koneksi shared
    }
}

export default BaseModel;
