const Post = require('../models/post');
module.exports.createPost = function(req,res){
    Post.create({ content : req.body.content,
        user : req.user.id
    },function(err,post){
        if(err){
            console.log("err at line 7");
        }
        return res.redirect('back');
    });
   
}