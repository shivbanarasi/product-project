const express=require('express');
const app=express();
const port=3000;
const product=require('./route/product');
const shop=require('./route/shop');
const contact=require('./route/contact')
const sucess=require('./route/sucess')

app.use('/shop',shop);

app.use('/product',product);

app.use('/contactus',contact);

app.use('/sucess',sucess);

app.listen(port,()=>{
    console.log(`listining to the port : ${port}`);
})