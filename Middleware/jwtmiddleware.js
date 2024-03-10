const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    
    try {
        const token = req.headers['authorization'].split(' ')[1]
        // console.log(token);
        const jwtResponse = jwt.verify(token,process.env.SECRETKEY)
        // console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next() 
        
    } catch (error) {
        res.status(411).json('Authorization failed!')
        
    }
} 

module.exports = jwtMiddleware