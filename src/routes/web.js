const express = require('express');
const {getHome, getCheck} = require('../controllers/homeController');

const router = express.Router();

      //route.methods('path', callback)
//route
router.get('/', getHome);

router.get('/check', getCheck);

module.exports = router;