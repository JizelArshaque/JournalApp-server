const express = require('express')

const router = new express.Router()
const userController = require('../Controller/userController')
const journalController = require('../Controller/journalController')
const jwtMiddleware = require('../Middleware/jwtmiddleware')

// registerUser
router.post('/register',userController.registerUserController)

// log
router.post('/login',userController.loginController)

// userdata
router.get('/user/:email',userController.getUserController)

// addjournal
router.post('/addjournal',jwtMiddleware,journalController.addJournalController)

// get journal

router.get('/getjournals',jwtMiddleware,journalController.getJournalController)

// get single journal
router.get('/vjournal/:id',jwtMiddleware,journalController.getSingleJournal)


// delete journal
router.delete('/delete/:id',journalController.deleteJournal)

module.exports = router