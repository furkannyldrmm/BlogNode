
const express =require("express"); // // expresi ekledik 
const exphbs=require("express-handlebars")

const path = require("path");
const app = express();
const hostname = '127.0.0.1'
const port=3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const fileupload = require('express-fileupload')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
    useNewUrlParser: true,      //hataları önlemek için kullanılır.
    useUnifiedTopology: true,
   
})
// app.use(fileupload())


// const conn= 'mongodb+srv://furkannyldrmm:fy244987@cluster0.knswr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// async function start(){
//     try{
//         await mongoose.connect(conn,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         app.listen(PORT,()=>console.log("server has been started"))
//     } catch {
//         console.error();
    
//     }
// }

// start()
app.use(express.static('public'))


const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs' ///.hbs olan dosyaları ara
})
app.engine('hbs',hbs.engine)  //// sitesinde bu kodlar var kullanmak için yazmamız gerekli.
app.set('view engine','hbs')
app.set('views','views')




app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const main= require('./routes/main')
app.use('/',main)

//require routes içerisindeki posts
const posts= require('./routes/posts');

app.use('/posts',posts)

//require routes içerisindeki users
const users= require('./routes/users');
const { use } = require('./routes/users');
app.use('/users',users)




app.get('/',(req,res)=>{
    res.render('site/index')
})

app.get('/about',(req,res)=>{
    res.render('site/about')
})
app.get('/blog',(req,res)=>{
    res.render('site/blog')
})
app.get('/contact',(req,res)=>{
    res.render('site/contact')
})
app.get('/posts/new',(req,res)=>{
    res.render('site/addpost')
})
 app.get('/login',(req,res)=>{
    res.render('site/login')
})
app.get('/register',(req,res)=>{
    res.render('site/register')
})

app.listen(port,hostname,()=>{
    console.log(`Server çalışıyor  http://${hostname}:${port}/`)
})

// app.listen(3000)