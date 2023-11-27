import UserModel from "../models/User.js"


class UserController{
    static home = (req,res)=>{
        res.render("index")
    }
    static registration = (req,res)=>{
        res.render("registration")
    }

    static createUserDoc = async (req,res) => {
        try {
            const doc = new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })

            await doc.save()
            res.redirect('/login')
        } catch (error) {
            console.log(error)
        }
    }

    static verifyLogin = async (req,res) => {
        try {
            const {email,password} = req.body;
            const result = await UserModel.findOne({email:email})
            // console.log(result)
            if (result!=null) {
                if(result.email==email && result.password==password){
                    res.send(`<h1>Welcome Mr. ${result.name}</h1>`)
                }else{
                    res.send('<h1>Please enter correct credentials!!</h1>')
                }
            }else{
                res.send('<h1>You are not registered user</h1>')
            }
        } catch (error) {
            console.log(error)
        }
    }

    static login = (req,res)=>{
        res.render("login")
    }
}

export default UserController;