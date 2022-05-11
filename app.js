const express =require("express") // // expresi ekledik 
const app = express();
const port=3000

app.get('/',(req,res)=>{
    res.send("Hello word")
})

// app.get('/',(req,res)=>{
//     res.render("views/index")
// })
app.listen(3000)