//5
const mongoose = require("mongoose");

//6
const connectMongo =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/sblog')
    .then(()=>console.log('connected to mongodb..'))
    .catch((err)=>console.log(err))
};

module.exports=connectMongo;