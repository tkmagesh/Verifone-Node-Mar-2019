var express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

router.get('/', function(req, res, next){
	var tasks = taskService.getAll(function(err, tasks){
		if (err){
			return next(err)
		} else {
			res.json(tasks);
		}
	});
	
});

router.post('/', function(req, res, next){
	var newTaskData = req.body;
	taskService.addNew(newTaskData, function(err, newTask){
		if (err){
			return next(err);
		} else {
			res.status(201).json(newTask);		
		}
	});
});

module.exports = router;