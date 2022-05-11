
const express =require("express"); // // expresi ekledik 
const exphbs=require("express-handlebars")

const path = require("path");
const app = express();
const port=3000
app.use(express.static('public'))


const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs' ///.hbs olan dosyaları ara
})
app.engine('hbs',hbs.engine)  //// sitesinde bu kodlar var kullanmak için yazmamız gerekli.
app.set('view engine','hbs')
app.set('views','views')


app.get('/',(req,res)=>{
    res.render('site/index')
})

app.get('/',(req,res)=>{
    res.render('site/about')
})
app.get('/',(req,res)=>{
    res.render('site/blog')
})


// app.get('/',(req,res)=>{
//     res.render("views/index")
// })
app.listen(3000)