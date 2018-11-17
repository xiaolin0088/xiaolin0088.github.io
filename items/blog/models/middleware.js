exports.checkLogin = function(req,res,next){
    if(!req.session.user){
        req.flash('error','请先登录');
        res.redirect('/login');
        next();
    }
}