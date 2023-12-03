import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

var checkUserAuth = async (req,res,next) => {
    let token;

    // Authorization from the header
    const{authorization} = req.headers

    if(authorization && authorization.startsWith('Bearer')){
        try {
            // Get Token from Header
            token = authorization.split(' ')[1]

            // Verify Token
            const {userID} = jwt.verify(token,process.env.JWT_SECRET_KEY)

            // Get user from Token
            req.user = await UserModel.findById(userID).select('-password')
            console.log(req.user)
            next()
        } catch (error) {
            res.send({"status":"failed","message":"UnAuthorized User"})
        }
    }
    if(!token){
        res.status(404).send({"status":"failed","message":"Unauthorized User, No Token"})
    }
    
}

export default checkUserAuth;