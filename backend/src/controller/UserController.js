import Users from "../models/Users.js";
import dotenv from "dotenv";

dotenv.config();

class UserController {

    async index(req, res) {
        try {
            let usersData = await Users.find({});
            return res.json({ users: usersData }).status(200);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    async show(req, res) {
        try {
            let id = req.params.id;
            let user = await Users.findById(id);
            if (user) {
                return res.json({ user }).status(200);
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
    async store(req, res) {
        try {
            let total = await Users.find({ email: req.body.email }).countDocuments();
            if (total > 0) {
                return res.status(400).json({ email: 'User already exists' });
            } else {
                let image ="";
                if(req.file){
                    image = req.file.filename;
                }
                await Users.create({ ...req.body,image:image });
                return res.json({ message: 'User created',success:true });
            }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    update(req, res) {
        return res.json({ message: 'User updated' });
    }

    delete(req, res) {
        return res.json({ message: 'User deleted' });
    }
}

export default UserController;