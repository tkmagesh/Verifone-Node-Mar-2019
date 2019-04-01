var fs = require('fs');
var dataFile = require('path').join(__dirname, '../db/taskData.json');

var taskDb = {
	read(){
		var fileContents = fs.readFileSync(dataFile, { encoding : 'utf8'});
		var data = JSON.parse(fileContents);
		return data;
	},
	save(data){
		var fileContents =  JSON.stringify(data);
		fs.writeFileSync(dataFile, fileContents);
	}
};

module.exports = taskDb;