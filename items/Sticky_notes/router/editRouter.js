var express = require('express');
var router = express.Router();

var Todo = require('../lib/mongoose').Todo;

router.get('/',(req,res) =>{
    res.send('edit');
})

router.post('/:itemId',(req,res) =>{
    var itemId = req.params.itemId;
    console.log(req.body)
    Todo.findByIdAndUpdate(itemId,{content: req.body.item},
        (err) =>{  
        console.log('更改成功');
        res.redirect('/');
    })
})  

module.exports = router;