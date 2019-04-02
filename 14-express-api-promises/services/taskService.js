var taskDb = require('./taskDb');

var taskService = {
	getAll(){
		return taskDb.read();
	},
	addNew(newTaskData){
		return taskDb.read()
			.then(tasks => {
				var newTask = { ...newTaskData, id : tasks.reduce((result, task) => result > task.id ? result : task.id, 0) + 1 };
				tasks.push(newTask);
				return taskDb
					.save(tasks)
					.then(() => newTask);
			});
	}
};

module.exports = taskService;