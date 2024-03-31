//1
const express = require('express');
//18
const connectMongo = require('./connection.js');
//19
const  uRoutes = require('./routing/userRouting.js');


//2
const app =express();
//21
connectMongo();

//3
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//20
app.use(uRoutes);


//4
app.listen(3000,()=>{
    console.log("database responding..");
})

