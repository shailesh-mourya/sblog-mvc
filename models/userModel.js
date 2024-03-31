//7
const mongoose =require('mongoose');
//8
const userSchema = new mongoose.Schema({
    user_id :Number ,
    email: String,
    phone : Number,
    name : String

})
//9
const uModel = mongoose.model('user',userSchema);
module.exports = {uModel};