module.exports = function notFoundHandler(req, res, next){
	if (!res.finished){
		console.log('[@not-found-handler] - serving 404');
		res.statusCode = 404;
		res.end();
	}
	next();
};
