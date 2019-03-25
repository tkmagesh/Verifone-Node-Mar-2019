var url = require('url');

module.exports = function dataParser(req){
	req['urlObj'] = url.parse(req.url);
};