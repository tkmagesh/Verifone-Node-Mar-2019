var fs = require('fs');
var dataFile = require('path').join(__dirname, '../db/taskData.json');

var taskDb = {
	read(){
		var p = new Promise(function(resolveFn, rejectFn){
			fs.readFile(dataFile, { encoding : 'utf8'}, function(err, fileContents){
				if (err){
					return rejectFn(err)
				}
				var data = JSON.parse(fileContents);
				return resolveFn(data);
			});	
		});
		return p;
		
	},
	save(data){
		var p = new Promise(function(resolveFn, rejectFn){
			var fileContents =  JSON.stringify(data);
			fs.writeFile(dataFile, fileContents, function(err){
				if (err){
					return rejectFn(err);
				}
				return resolveFn();
			});	
		})
		return p;
	}
};

module.exports = taskDb;