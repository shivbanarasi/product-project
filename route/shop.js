const express=require('express');
//const path=require('path');
const route=express.Router();

const shocontroller=require('../controllers/shop')

route.get('/',shocontroller.shopcontroller);

module.exports=route;
