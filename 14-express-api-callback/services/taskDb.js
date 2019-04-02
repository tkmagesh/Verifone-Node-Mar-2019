var fs = require('fs');
var dataFile = require('path').join(__dirname, '../db/taskData.json');

var taskDb = {
	read(callback){
		fs.readFile(dataFile, { encoding : 'utf8'}, function(err, fileContents){
			if (err){
				return callback(err);
			}
			var data = JSON.parse(fileContents);
			return callback(null, data);
		});
	},
	save(data, callback){
		var fileContents =  JSON.stringify(data);
		fs.writeFile(dataFile, fileContents, callback);
	}
};

module.exports = taskDb;