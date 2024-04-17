//1
const express = require('express');
//18
const connectMongo = require('./connection.js');
//19
const  uRoutes = require('./routing/userRouting.js');
const  pRoutes = require('./routing/postRouting.js');
//
var cors = require('cors');



//2
const app =express();

//21
connectMongo();

//3
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//20
app.use(uRoutes);
app.use(pRoutes);
//



//4
app.listen(3000,()=>{
    console.log("database responding..");
})

