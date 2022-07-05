const User = require('../models/userM')

const getProfilePage = async(req,res)=> {
try {
    const user = await User.findOne({ username: req.params.username }).lean()
    if(!user) throw new Error('Bunday foydalanuvchi mavjud emas!')
    res.render('user/profile', {
        title: `${user.username}`,
        url: process.env.URL,
        user
    })    
} catch (err) {
    console.log(err)
}
}


module.exports = {  getProfilePage }