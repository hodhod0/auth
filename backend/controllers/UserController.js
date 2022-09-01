const User = require("../models/UserModel")


//login
const loginUser = async (req,res)=>{
    res.json({mssg:'login user'})
}

//singup
const singupUser = async (req,res)=>{
    const {email, password} = req.body
    try {
        const user = await User.singup(email,password)
        res.status(200).json({email,user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= {
    loginUser,
    singupUser
}