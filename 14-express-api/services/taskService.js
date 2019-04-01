var taskDb = require('./taskDb');

var taskService = {
	getAll(){
		var tasks = taskDb.read();
		return [...tasks];
	},
	addNew(newTaskData){
		var tasks = taskDb.read();
		var newTask = { ...newTaskData, id : tasks.reduce((result, task) => result > task.id ? result : task.id, 0) + 1 };
		tasks.push(newTask);
		taskDb.save(tasks);
		return newTask;
	}
};

module.exports = taskService;