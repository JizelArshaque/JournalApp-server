const users = require('../model/userModel')
const jwt = require('jsonwebtoken')

exports.registerUserController = async(req,res)=>{
    const {email , username , password} = req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(431).json('User with same email Already exists! try logging in instead')
        }else{
            const newUser = new users({
                email,username, password
            })
            await newUser.save()
            res.status(211).json(newUser)
        }
    } catch (error) {
        res.status(452).json(error)
    }
}


exports.loginController = async(req,res)=>{

    const {email , password} = req.body
    try {
        const existingUser = await users.findOne({email , password})

        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.SECRETKEY)
            console.log({existingUser,token});
            res.status(211).json({existingUser,token})
        }else{
            res.status(433).json('Invalid credentials!')
        }
    } catch (error) {
        res.status(421).json('Error While Logging in try again!')
    }
}

exports.getUserController = async(req,res)=>{
    const {email} = req.params
    try {
        const user = await users.findOne({email})
        if(user){
            res.status(211).json(user)
        }else{
            res.status(400).json('no user withat email found! ')
        }
    } catch (error) {
        res.status(431).json(error)
        
    }
}