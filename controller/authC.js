const User = require('../models/userM')
const bcrypt = require('bcrypt')


const getSignupPage = (req,res)=> {
    res.render('auth/sign-up', {
        url: process.env.URL,
        title: `ro'yaxtdan o'tish`
    })
}

const getSigninPage = (req,res)=> {
    res.render('auth/sign-in', {
        url: process.env.URL,
        title: `kirish`
    })
}

const signup = async(req,res)=> {
    try {
        const { email, username, phone, password, password2 } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const userExist = await User.findOne({email})
        if(userExist){
            return res.redirect('/auth/signup')
        }
        if(password !== password2){
            return res.redirect('/auth/signup')
        }
    
        await User.create({
            email,
            username,
            phone,
            password:hashedPassword
        })
        return res.redirect('/auth/signin')
    } catch (err) {
        console.log(err)
    }
}


const signin = async(req,res)=> {
    const userExist = await User.findOne({email: req.body.email})
    if(userExist){
        const pm = await bcrypt.compare(req.body.password, userExist.password)
        if(pm){
            req.session.user = userExist
            req.session.isLogged = true
            req.session.save(err=>{
                if(err) throw err
                res.redirect('/profile' + req.session.user.username)
            })
        }else{
            res.redirect('/auth/signin')
        }
    }else{
        res.redirect('/auth/signin')
    }
}

module.exports = {
    getSignupPage,
    getSigninPage,
    signup,
    signin
}