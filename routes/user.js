const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');
console.log('user router loded');
router.get('/profile/:id', passport.checkAuthentication,userController.profile);
router.post('/update/:id', passport.checkAuthentication,userController.update);
router.get('/signin', userController.signIn);
router.get('/signUP', userController.signUP);
router.post('/create', userController.create);
// use passport as middleware to authenticate
router.post('/create-session', passport.authenticate('local',{ failureRedirect: '/user/signin' },
), userController.createSession);
router.get('/signout',userController.destroySession);

module.exports = router;