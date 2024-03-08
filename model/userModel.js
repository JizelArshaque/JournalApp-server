const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        require:true,
        type:String,
        unique:true
    },
    username:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users