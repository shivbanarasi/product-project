//const path=require('path');
const express=require('express');
const route=express.Router();
const concontroller=require('../controllers/contact')

route.get('/',concontroller.contactcontroller);

module.exports=route