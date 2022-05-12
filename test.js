const mongoose = require('mongoose');
const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
    useNewUrlParser: true,      //hataları önlemek için kullanılır.
    useUnifiedTopology: true
})

// db denemeler için create

// Post.create({
//     title: 'İkinci post başlığım',
//     content : 'İkinci post içeriğim lorem ipsum'
// },(error,post)=>{
//       console.log(error,post)
// })

//db deneme kodları find ve update komutları

// Post.find({},(error,post)=>{
//      console.log(error,post)
// })

// Post.findById('6278eff0e85e2a6e665c595d',(error,post)=>{
//     console.log(error,post)
// })
 
//update 

// Post.findByIdAndUpdate('6278eff0e85e2a6e665c595d',{
//     title:'Update edilmiş ilk post başlığım'
// },(error,post)=>{
//     console.log(error,post)
// })

// Post.find({},(error,post)=>{
//       console.log(error,post)
// })

//DELETE

// Post.findByIdAndDelete('627904ac461a5572ab18952b',(error,post)=>{
//     console.log(error,post)
// })

// Post.find({},(error,post)=>{
//       console.log(error,post)
// })