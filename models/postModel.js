const mongoose =require('mongoose');

//for new post
const postSchema = new mongoose.Schema({
    //
    title : String,
    description : String,
    content : String
 
 })
 
 //
const pModel = mongoose.model('post',postSchema);
module.exports = {pModel};