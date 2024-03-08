const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log('Connected DB');
}).catch((err)=>{
    console.log('Couldnt connect due to',err);
})
