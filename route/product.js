const path=require('path');
const express=require('express');
const route=express.Router();

route.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','product.html'));
});
module.exports=route;