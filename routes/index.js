const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router loded');
router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/posts',require('./posts'));
router.use('/comment',require('./comments'));

module.exports = router;