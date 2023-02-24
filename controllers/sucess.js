const path=require('path');

module.exports.sucesscontroller=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','sucess.html'));
}