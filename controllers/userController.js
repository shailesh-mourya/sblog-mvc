//10
const model = require('../models/userModel.js');

//11 create methods
const showUser = async (req,res)=>{
 const result = await model.uModel.find();
 res.json(result);
}

//12
module.exports= {showUser};
