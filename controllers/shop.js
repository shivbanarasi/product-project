const path=require('path');

module.exports.shopcontroller=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
};