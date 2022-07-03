const { Router } = require('express')
const router = Router()
const { 
    getSignupPage,
    getSigninPage,
    signup,
    signin
} = require('../controller/authC')

router.get('/signup', getSignupPage)
router.get('/signin', getSigninPage)

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router



