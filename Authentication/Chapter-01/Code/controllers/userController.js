import UserModel from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController{
    static userRegistration = async (req,res) => {
        const {name,email,password,password_confirmed,tc} = req.body

        const user = await UserModel.findOne({email:email})

        if(user){
            res.send({"status":"failed","message":"Email Already Exists"})
        }else{
            if(name&&email&&password&&password_confirmed&&tc){
                if(password===password_confirmed){
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hash_password = await bcrypt.hash(password,salt)
                        const doc = new UserModel({
                            name:name,
                            email:email,
                            password:hash_password,
                            tc:tc
                        })
                        await doc.save()

                        // Genertate JWT Token
                        const saved_user = await UserModel.findOne({email:email})
                        const token = jwt.sign({userID:saved_user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})


                        res.status(201).send({"status":"Registered Sucessfully","token":token})
                    } catch (error) {
                        res.send({"error":error})
                    }
                }else{
                    res.send({"status":"failed","message":"Password is not same"})
                }

            }else{
                res.send({"status":"failed","message":"Enter all the field"})
            }
        }
    }

    static userLogin = async (req,res) => {
        try {
            const {email,password} = req.body
            
            if(email&&password){
                const user = await UserModel.findOne({email:email})
                if(user !=null){
                    const isMatch = await bcrypt.compare(password,user.password)
                    if((user.email===email) && isMatch){
                        const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
                        res.send({"status":"success","message":"You're now login","token":token})
                    }else{
                        res.send({"status":"failed","message":"Email of Password is incorrect!!"})
                    }
                }else{
                    res.send({"status":"failed","message":"You're not an existing user"})
                }
            }else{
                res.send({"status":"failed","message":"All fields required"})
            }
        } catch (error) {
            
        }
    }
}

export default UserController;