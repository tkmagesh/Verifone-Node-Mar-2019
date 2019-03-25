module.exports = function notFoundHandler(res){
	console.log('[@not-found-handler] - serving 404');
	res.statusCode = 404;
	res.end();
};
