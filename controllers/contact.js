const path=require('path');

module.exports.contactcontroller=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'))
}