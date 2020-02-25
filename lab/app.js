//declaration
var express = require('express');
var ejs = require('ejs');
var admin = require('./controllers/admin/admin');
var employee = require('./controllers/employee/employee');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());





app.use('/admin', admin);
app.use('/employee', employee);


//routes
app.get('/', function(req, res){
	res.render("admin.ejs");
});




//server startup
app.listen(3000, function(){
	console.log('node server started at 3000!');
});