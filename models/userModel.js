//7
const mongoose =require('mongoose');
//8
const userSchema = new mongoose.Schema({
   // user_id :Number,
   firstName : String,
   lastName : String,
  birthdayDate: String,
  gender:String,
   emailAddress: String,
   phoneNumber : Number,
   password: String
    

})


//9
const uModel = mongoose.model('user',userSchema);


module.exports = {uModel};