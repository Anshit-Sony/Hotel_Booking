const express = require('express');
const router = express.Router()
const HomeController=require('../controllers/home')

router.route('/')
.get(HomeController.renderHome)

module.exports=router