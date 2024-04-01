//13
const express = require('express');

//14 import fn from controllers
const  {showUser, addUser, deleteUser} = require("../controllers/userController.js");

//15
const router =express.Router();

//16
router.get("/users/showusers",showUser); //to fetch all users

router.post("/users/addusers",addUser); //to add new user

router.delete("/users/deleteusers/:phoneNumber",deleteUser);  // to delete user

//17
module.exports = router;