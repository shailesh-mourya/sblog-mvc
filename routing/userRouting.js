//13
const express = require('express');

//14 import fn from controllers
const  {showUser} = require("../controllers/userController.js");

//15
const router =express.Router();

//16
router.get("/users/showusers",showUser); //to fetch all users

//17
module.exports = router;