var express = require('express'); 
var registerModel = require.main.require('./models/register-Model');
var router = express.Router();



router.get('/', function(req, res){
	res.render("addEmployee");
});

router.post("/", function(req, res){


	
	console.log("OKAY");
	var data = {
		name: req.body.name,
		contact: req.body.contact,
		username: req.body.username,
		password: req.body.password
	};

	console.log(req.body.name)


	registerModel.insert(data, function(status){
		if(status){
			console.log("registered");
			res.redirect("/employee/employee");
		}
		else{
			console.log("Not registered");
		}
		
	});

	

});



module.exports = router;