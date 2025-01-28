import TokenVerify from "./TokenVerify.js";

class RouteMiddleware{

    static checkAuth(req, res, next) {
        let token = req.headers.authorization;
        if(token){
            token = token.split(' ')[1];
            try {
                TokenVerify.verify(token);
                next();
            } catch (error) {
                res.status(401).json({message: 'Unauthorized'});
            }
        }else{
            res.status(401).json({message: 'Token not provided'});
        }
        

    }

}

export default RouteMiddleware;