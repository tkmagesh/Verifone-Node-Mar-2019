var taskDb = require('./taskDb');

var taskService = {
	getAll(callback){
		var tasks = taskDb.read(function(err, tasks){
			return callback(err, tasks);
		});
		
	},
	addNew(newTaskData, callback){
		taskDb.read(function(err, tasks){
			if (err){
				return callback(err);
			}
			var newTask = { ...newTaskData, id : tasks.reduce((result, task) => result > task.id ? result : task.id, 0) + 1 };
			tasks.push(newTask);
			taskDb.save(tasks, function(err){
				if (err){
					return callback(err);
				}
				callback(null, newTask);
			});
			
		});
		
	}
};

module.exports = taskService;