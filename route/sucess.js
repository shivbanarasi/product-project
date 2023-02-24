const path=require('path');
const express=require('express');
const route=express.Router();
const susscontroller=require('../controllers/sucess')


route.get('/',susscontroller.sucesscontroller);
module.exports=route;