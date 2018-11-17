var mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost/JmmFDB',{useNewUrlParser:true}, (err) => {
    if(err){
        console.log('数据库连接失败！')
    }else{
        console.log('数据库连接成功！')
    }
});

//创建Schema
var todoSchema = mongoose.Schema({
    content:String,
    isFinished:{
        type:Boolean,
        default:false
    }
})

//model
var Todo = mongoose.model('Todo',todoSchema);

//传出
exports.Todo = Todo;