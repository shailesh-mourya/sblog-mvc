//13
const express = require('express');

//14 import fn from controllers
const  {showPost,showTitlePost, addPost,updatePost, deletePost} = require("../controllers/postController.js");

//15
const postrouter =express.Router();

//16 for user
postrouter.get("/post/showpost",showPost); //to fetch all post

postrouter.get('/post/showtitlepost/:blog_id', showTitlePost);    //to fetch post by title

postrouter.put('/posts/:blog_id',updatePost);  //update blog


postrouter.post("/post/addpost",addPost); //to add new post

postrouter.delete("/post/deletepost/:blog_id",deletePost);  // to delete post

//17
module.exports = postrouter;