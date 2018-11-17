var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var User = require('../models/User').User;
var fs = require('fs');

//磁盘模式 设置在哪里存储上传的附件
var storage = multer.diskStorage({
    //目录
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    //附件名
    filename: function (req, file, cb) {
        cb(null, req.body.username + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
})

router.get('/',(req,res) =>{
    // res.send('index');
    res.render('register');
})
                //上传单一附件
router.post('/',upload.single('avatar'),(req,res) =>{
    // res.send('index');
    console.log('req.body', req.body);
    // res.send('register post');

    var username = req.body.username;
    var password = req.body.password;
    var gender = req.body.gender;
    var profile = req.body.profile;
    var avatar = req.file;
    
    try {
        if(!username){
            throw new Error('用户名不能为空')
        }
        if (!password) {
            throw new Error('密码不能为空')
        }
        if (!profile) {
            throw new Error('简介不能为空')
        }
    } catch (e) {
        if(avatar){
            fs.unlink(avatar.path,(err) =>{
                if(err){
                    console.log('头像删除错误')
                }else{
                    console.log('头像删除成功')
                }
            })   
        }
        req.flash("error", e.message);
        res.redirect('back');
        return
    }

    User.create({
        username:username,
        password: password,
        gender: gender,
        profile: profile,
        avatar: avatar.filename
    },(err,result) =>{
        if(err){
            console.log('注册写入数据库错误',err);
        }else{
            console.log('注册写入数据库完成');
            req.flash('success','注册成功')
            res.redirect('/login');

        }
    })

})

module.exports = router;