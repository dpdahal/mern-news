import Users from "../models/Users.js";
import TokenVerify from "../middleware/TokenVerify.js";

class AuthController {

    async login(req, res) {
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
            let data = await user.comparePassword(req.body.password);
            if (data) {
                let token = await user.generateToken();
                return res.status(200).json({ message: 'Login Success', token: token });
            } else {
                return res.status(400).json({ password: 'Password not match' });
            }
        } else {
            return res.status(400).json({ email: 'Email not found' });
        }
    }


    async checkTokenVerify(req, res) {
        try {
            if (req.body.token) {
                let validToken = TokenVerify.verify(req.body.token);
                if (validToken) {
                    return res.status(200).json({ data: true });
                } else {
                    return res.status(400).json({ message: 'Token is invalid' });
                }
            } else {
                return res.status(400).json({ message: false });
            }
        }
        catch (error) {
            return res.status(400).json({ message: false });
        }

    }
}

export default AuthController;