const express = require('express');
const homeController = require('../controllers/home_controller');
const router = express.Router();
console.log('router loded');
router.get('/',homeController.home);
router.use('/user',require('./user'));

module.exports = router;