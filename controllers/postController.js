//10
const model = require('../models/postModel.js');

//11 create methods
//fn for view post data
const showPost = async (req,res)=>{
 const result = await model.pModel.find();
 res.json(result);
}

const showTitlePost = async (req, res) => {
    const { blog_id } = req.params; // Assuming title is passed as a URL parameter
    const result = await model.pModel.find({ blog_id }); // Fetch posts with matching title
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


//fu for update blog
const updatePost = async (req, res) => {
    const { blog_id } = req.params; // Assuming blog_id is passed as a URL parameter
    const { title,description, content,author } = req.body; // Assuming title and content are sent in the request body

    try {
        // Find the post by blog_id and update its title and content
        const result = await model.pModel.findOneAndUpdate({ blog_id }, { title,description, content,author }, { new: true });

        if (!result) {
            // If no post is found with the given blog_id, send a 404 status
            return res.status(404).json({ message: 'Post not found' });
        }

        // If the post is successfully updated, send the updated post back as JSON
        res.json(result);
    } catch (error) {
        // If an error occurs during the update process, send a 500 status with the error message
        console.error('Error updating post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}







//fn for delete post
const deletePost = (req,res)=>{
    const blog_id = Number(req.params.blog_id);
    const result = model.pModel.deleteOne({blog_id:blog_id})
    .then(()=>res.send('one user deleted...'))
    .catch((err)=>console.log(err))
    console.log(result);
}





//12
module.exports= {showPost,showTitlePost,addPost,updatePost,deletePost};
