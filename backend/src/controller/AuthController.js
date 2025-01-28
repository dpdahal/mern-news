import Users from "../models/Users.js";

class AuthController {

    async login(req, res) {
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
               let data = await user.comparePassword(req.body.password);
            if (data) {
                let token = await user.generateToken();
                return res.status(200).json({ message: 'Login Success', token: token });
            }else{
                return res.status(400).json({ message: 'Password not match' });
            }
        } else {
            return res.status(400).json({ message: 'Email not found' });
        }
    }
}

export default AuthController;