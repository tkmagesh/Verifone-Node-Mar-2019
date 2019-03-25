var fs = require('fs'),
	path = require('path');

var staticExtns = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'))).staticExtns;

function isStatic(resource){
	var resExtn = path.extname(resource);
	return staticExtns.indexOf(resExtn) >= 0;
}

module.exports = function serveStatic(req, res){
	var resourceName = req.url  === '/' ? 'index.html' : req.url;
	if (isStatic(req.urlObj.pathname)){
		var resourcePath = path.join(__dirname, req.urlObj.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}

		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	}
};