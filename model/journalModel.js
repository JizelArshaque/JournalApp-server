const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    userId:{
        require:true,
        type:String
    },
    content:{
        require:true,
        type:String
    },
    date:{
        type:String,
        require:true
    }
})

const journals = mongoose.model('journals',journalSchema)

module.exports = journals