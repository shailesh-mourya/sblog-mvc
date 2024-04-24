const mongoose =require('mongoose');

//for new post
const postSchema = new mongoose.Schema({
    //
    blog_id: String,
    title : String,
    date : String,
    description : String,
    content : String,
    author : String
 
 })
 
 //
const pModel = mongoose.model('post',postSchema);
module.exports = {pModel};