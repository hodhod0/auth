const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")

const createToken = (_id)=>{
   return jwt.sign({_id}, process.env.SERCET,{expiresIn:"3d"})

}


//login
const loginUser = async (req,res)=>{
    res.json({mssg:'login user'})
}

//singup
const singupUser = async (req,res)=>{
    const {email, password} = req.body
    try {
        const user = await User.singup(email,password)
        //create token
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= {
    loginUser,
    singupUser
}