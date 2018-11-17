var express = require('express');
var router = express.Router();

var Todo = require('../lib/mongoose').Todo;

router.get('/:itemId',(req,res) =>{
    var itemId = req.params.itemId;
    Todo.findByIdAndDelete(itemId,(err) =>{
        console.log('删除成功');
    })
    res.redirect('/');
});
module.exports = router;
