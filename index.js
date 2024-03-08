require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./Routes/router')

const examserver = express()
examserver.use(express.json())
examserver.use(cors())
examserver.use(router)

PORT = 3000 || process.env.PORT

examserver.listen(PORT,()=>{
    console.log('Server Running at:',PORT);
})

examserver.get('/',(req,res)=>{
    res.send('default!')
})
