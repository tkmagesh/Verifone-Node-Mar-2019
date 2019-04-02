var taskDb = require('./taskDb');

var taskService = {
	async getAll(){
		return await taskDb.read();
	},
	async addNew(newTaskData){
		var tasks = await taskDb.read();
		var newTask = { ...newTaskData, id : tasks.reduce((result, task) => result > task.id ? result : task.id, 0) + 1 };
		tasks.push(newTask);
		await taskDb.save(tasks)
		return newTask;
	}
};

module.exports = taskService;