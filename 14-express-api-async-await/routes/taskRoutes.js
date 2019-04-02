var express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

router.get('/', async function(req, res, next){
	try{
		var tasks = await taskService.getAll()
		res.json(tasks)
	} catch (err) {
		next(err);
	}
});

router.post('/', async function(req, res, next){
	try{
		var newTaskData = req.body;
		var newTask = await taskService.addNew(newTaskData);
		res.status(201).json(newTask);
	} catch (err) {
		next(err);
	}
});

module.exports = router;