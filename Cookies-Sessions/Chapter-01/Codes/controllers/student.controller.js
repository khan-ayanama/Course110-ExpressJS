class StudentController{
    static set_cookie = (req,res)=>{
        res.cookie("username","naeem",{maxAge:30000})
        res.send("Cookies Set...")
        console.log(req.cookies)
    }
    static get_cookie = (req,res)=>{
        res.send("Cookies Get...")
    }
    static delete_cookie = (req,res)=>{
        res.send("Cookies Deleted...")
    }
}


export default StudentController;