var express = require('express');
var router = express.Router();
var User = require('../models/User').User;

router.get('/',(req,res) =>{
    req.session.user = null;
    req.flash('success','成功退出')
    res.redirect('back');
})
module.exports = router;