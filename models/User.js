const mongoose = require('mongoose');
//mongodb oluşturulacak olan dökümanın yapısını schemma belirler

const UserSchema = new mongoose.Schema({
    username:   {type: String,required:true,unique:true},        
    email:       {type: String,required:true,unique:true},       
    password:    {type: String,required:true},     
         
    
})


module.exports = mongoose.model('User',UserSchema)       //model yardımıyla nesnesini oluşturup veritabanı ile iletişime geçiliyor.ilk parametre model ismi 