const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title:   {type: String,required:true},      
    content: {type: String,required:true},       // //mutlaka dolu kayıt getirir
    date:    {type:Date, default:Date.now},     // zaman 
    
})


module.exports = mongoose.model('Post',PostSchema)       // veritabanı ile iletişime geçilir. 