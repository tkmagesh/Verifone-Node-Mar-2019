module.exports = function logger(req, res, next){
	var logMessage = req.method + '\t' + req.urlObj.pathname + '\t';
	var startTime = new Date();
	res.on('finish', function(){
		var endTime = new Date(),
			delta = endTime - startTime;
		logMessage += res.statusCode + '\t' + delta + 'ms';
		console.log(logMessage);
	});
	next();
}