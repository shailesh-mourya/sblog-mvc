//10
const model = require('../models/userModel.js');

//11 create methods
//fn for view user data
const showUser = async (req,res)=>{
 const result = await model.uModel.find();
 res.json(result);
}

//fn for reg new user
const addUser = async(req,res)=>{
    let user=req.body;
    const data = new model.uModel(user);
    const result = await data.save()
    .then(()=>res.send('user add...'))
    .catch((err)=>console.log(err))
    console.log(result);
}

//fn for delete reg user
const deleteUser = (req,res)=>{
    const phoneNumber = Number(req.params.phoneNumber);
    const result = model.uModel.deleteOne({phoneNumber:phoneNumber})
    .then(()=>res.send('one user deleted...'))
    .catch((err)=>console.log(err))
    console.log(result);
}





//12
module.exports= {showUser,addUser,deleteUser};
