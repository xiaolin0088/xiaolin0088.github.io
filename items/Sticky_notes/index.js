var express = require("express");
var app = express();
//中间件，解析文件
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
//静态托管
app.use(express.static("public"));

//模块引擎
app.set('views','./views');
//？？模块
app.set('view engine','ejs');

//导入路由
var indexRouter = require('./router/indexRouter');
var deleteRouter = require('./router/deleteRouter');
var editRouter = require('./router/editRouter');
var toggleRouter = require('./router/toggleRouter');

//使用路由
app.use('/',indexRouter);
app.use('/delete',deleteRouter);
app.use('/edit',editRouter);
app.use('/toggle',toggleRouter);




app.listen(8080,() =>{
    console.log('8080,success!');
})