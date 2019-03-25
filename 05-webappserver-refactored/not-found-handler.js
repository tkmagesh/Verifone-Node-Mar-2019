module.exports = function notFoundHandler(res){
	res.statusCode = 404;
	res.end();
};
