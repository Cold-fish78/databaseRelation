const Post = require('../models/post');
const User = require('../models/user');
module.exports.home = function (req, res) {
   // console.log(req.cookies);
   // res.cookie('user_id', 25);
// populate the user of each of post
   Post.find({})
   .populate('user')
   .populate({
      path :'comments',
      populate : {
         path : 'user'
      }
   })
   .exec(function (err, posts) {
      User.find({},function(err,users){
         return res.render('home', {
            title: "this is title of the page",
            posts: posts,
            all_users : users
         });
      })

     
   })
}
