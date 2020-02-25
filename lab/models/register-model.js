var db = require('./db');

module.exports= {
	insert: function(user, callback){
		var sql = "insert into emplyee values(?,?,?,?,?)";
		db.execute(sql, [null, user.name, user.contact, user.username, user.password], function(status){
			if(status){
				console.log("Okay");
				
				callback(true);
			}else{
				console.log("Not Okay");

				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from emplyee";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	}
	
}