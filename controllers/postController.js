//10
const model = require('../models/postModel.js');

//11 create methods
//fn for view post data
const showPost = async (req,res)=>{
 const result = await model.pModel.find();
 res.json(result);
}

const showTitlePost = async (req, res) => {
    const { title } = req.params; // Assuming title is passed as a URL parameter
    const result = await model.pModel.find({ title }); // Fetch posts with matching title
    res.json(result);
  }

//fn for add new post
const addPost = async(req,res)=>{
    let posts=req.body;
    const data = new model.pModel(posts);
    const result = await data.save()
    .then(()=>res.send('New post added...'))
    .catch((err)=>console.log(err))
    console.log(result);
}

//fn for delete post
const deletePost = (req,res)=>{
    const phoneNumber = Number(req.params.phoneNumber);
    const result = model.pModel.deleteOne({phoneNumber:phoneNumber})
    .then(()=>res.send('one user deleted...'))
    .catch((err)=>console.log(err))
    console.log(result);
}





//12
module.exports= {showPost,showTitlePost,addPost,deletePost};
