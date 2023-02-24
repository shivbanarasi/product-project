//const path=require('path');
const express=require('express');
const route=express.Router();
const procontroller=require('../controllers/addpro')

route.get('/add-product',procontroller.getproducts);
module.exports=route;