var express = require('express');
var router = express.Router();

var Todo = require('../lib/mongoose').Todo;

router.get('/',(req,res) =>{
    Todo.find((err,result) =>{
        // console.log(result);
        res.render('index',{
            title:'JMMM',
            items:result
        })
    })
});

router.post('/',(req,res) =>{
      
    if(req.body.item){
        // console.log(req.body.item);
        //   var item = new Todo({
        //     content: req.body.item
        // })
        // item.save((err) => {
        //     if (err) {
        //         return console.log(err)
        //     }
        //     console.log('写入成功')
        // });

        Todo.create({
            content:req.body.item
        },(err) =>{
            if(err){
                console.log('写入失败');
            }else{
                console.log('写入成功');
            }
        })
    }
    // else{
    //     console.log('不存在');
    // }
    res.redirect('/');
});

module.exports = router;