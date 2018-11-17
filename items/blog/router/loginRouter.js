var express = require('express');
var router = express.Router();
var User = require('../models/User').User;

router.get('/',(req,res) =>{
    // res.send('index');
    res.render('login');
})

router.post('/',(req,res) =>{
    console.log('req.body', req.body);
    // res.send('login post');

    var username = req.body.username;
    var password = req.body.password;

    try {
        if(!username){
            throw new Error('用户名为空');
        }
        if(!password){
            throw new Error('密码为空');
        }
    } catch (e) {
        req.flash('error',e.message);
        res.redirect('back');
    }

    User.findOne({username:username},(err,result) =>{
        if(err){
            console.log('查找用户失败', err)
        }
        if(!result){
            req.flash('error','用户不存在');
            return res.redirect('back');
        }
        if(result.password != password){
            req.flash('error','密码错误');
            res.redirect('back');
        }else{ 
            req.session.user = result;
            req.flash('success','登陆成功');
            res.redirect('/posts?author=' + result._id);
        }
    })

})

module.exports = router;