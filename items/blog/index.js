var express = require('express');
var bodyParser = require('body-parser');
// 服务器运行就链接数据库
var db = require('./lib/mongoose').db;
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var flash = require("connect-flash");
var app = express()

// console.log(db);

app.set('views', './views/');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// 使用 session
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000
        },
        store: new MongoStore({
            mongooseConnection: db
        })
    })
);

app.use(flash());

// set flash 每一次响应请求 带的参数
app.use((req, res, next) => {
    res.locals.user = req.session.user

    res.locals.success = req.flash("success").toString();
    res.locals.error = req.flash("error").toString();
    next();
});

app.use('/',require('./router/indexRouter'));
app.use('/login',require('./router/loginRouter'));
app.use('/register',require('./router/registerRouter'));
app.use('/posts', require('./router/postsRouter'));
app.use('/logout', require('./router/logoutRouter'));
app.use('/comments', require('./router/commentsRouter'));

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});