import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

class TokenVerify {
    static verify(token) {
          return jwt.verify(token, process.env.JWT_SECRET);
    }
}

export default TokenVerify;