import {models} from '../Models/Index.js';

class UserController{
    static async getUsers(req, res) {
        try {
            const users = await models.User.findAll();
            if(users.length > 0){
                res.status(200).json(users);
            }
            return res.status(200).json({message:'Data kosong'});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // POST Request Handler
    static async createUser(req, res) {
        try {
            const { name, email } = req.body; // Capture POST data
            const newUser = await models.User.create({ name, email });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default UserController