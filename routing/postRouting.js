//13
const express = require('express');

//14 import fn from controllers
const  {showPost, addPost, deletePost} = require("../controllers/postController.js");

//15
const postrouter =express.Router();

//16 for user
postrouter.get("/post/showpost",showPost); //to fetch all post

postrouter.post("/post/addpost",addPost); //to add new post

postrouter.delete("/post/deletepost/:title",deletePost);  // to delete post

//17
module.exports = postrouter;