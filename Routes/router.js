const express = require('express')

const router = new express.Router()
const userController = require('../Controller/userController')

// registerUser
router.post('/register',userController.registerUserController)

// log
router.post('/login',userController.loginController)

// userdata
router.get('/user/:email',userController.getUserController)

module.exports = router