const path=require('path');

exports.getproducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','product.html'));
}