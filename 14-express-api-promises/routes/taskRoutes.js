var express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

router.get('/', function(req, res, next){
	taskService
		.getAll()
		.then(tasks => res.json(tasks))
		.catch(err => next(err));
});

router.post('/', function(req, res, next){
	var newTaskData = req.body;
	taskService
		.addNew(newTaskData)
		.then(newTask => res.status(201).json(newTask))
		.catch(err => next(err));
});

module.exports = router;