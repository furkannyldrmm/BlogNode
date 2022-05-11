
const express =require("express"); // // expresi ekledik 
import { engine } from 'express-handlebars';
const path = require("path");
const app = express();
const port=3000
app.use(express.static('public'))


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('site2/index');
})
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'site/about.html'))
})
app.get('/blog',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'site/blog.html'))
})
// app.get('/',(req,res)=>{
//     res.render("views/index")
// })
app.listen(3000)