const express = require('express')
const { restart } = require('nodemon')
const router = express.Router() 
const User = require('../models/User')


router.get('/register', (req,res) => {
    res.render('site/register')    

})
router.post('/register', (req,res) => {
    User.create(req.body,(error,user)=>{
        res.redirect('/')
    })
      

})
router.get('/login', (req,res) => {
    res.render('site/login')   

})
router.post('/login', (req,res) => {
    const {email,password} = req.body          // email ve password alınır
    User.findOne({email},(error,user)=>{
        if (user){
            if(user.password == password){     //email ve password eşleşirse homepage a yönlendirir.
                                   
                res.redirect('/')
            }
            else{
                res.redirect('/users/login')      //eğer eşleşmeşse login sayfasına tekrar yönlendirir.
            }
        }else{
            res.redirect('/users/register')      // kullanıcı yoksa  register sayfasına yönlendirir.
        }
    })

})


module.exports = router