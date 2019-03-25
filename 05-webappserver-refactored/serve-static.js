var fs = require('fs'),
	path = require('path');

var staticExtns = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'))).staticExtns;

function isStatic(resource){
	var resExtn = path.extname(resource);
	return staticExtns.indexOf(resExtn) >= 0;
}

module.exports = function(staticResPath){
	return function serveStatic(req, res, next){
		var resourceName = req.url  === '/' ? 'index.html' : req.urlObj.pathname;
		var resourcePath = path.join(staticResPath, resourceName);
		if (isStatic(resourceName) && fs.existsSync(resourcePath)){
			var stream = fs.createReadStream(resourcePath);
			stream.pipe(res);
			stream.on('end', function(){
				next();
			})
		} else {
			next();
		}
	};
}