var express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

router.get('/', function(req, res, next){
	var tasks = taskService.getAll();
	res.json(tasks);
});

router.post('/', function(req, res, next){
	var newTaskData = req.body;
	var newTask = taskService.addNew(newTaskData);
	res.status(201).json(newTask);
});

module.exports = router;