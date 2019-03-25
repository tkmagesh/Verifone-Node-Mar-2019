var fs = require('fs'),
	path = require('path');

var staticExtns = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'))).staticExtns;

function isStatic(resource){
	var resExtn = path.extname(resource);
	return staticExtns.indexOf(resExtn) >= 0;
}

module.exports = function serveStatic(req, res){
	var resourceName = req.url  === '/' ? 'index.html' : req.urlObj.pathname;
	if (isStatic(resourceName)){
		var resourcePath = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourcePath)){
			console.log('[@serve-static] - serving 404');
			res.statusCode = 404;
			res.end();
			return;
		}


		var stream = fs.createReadStream(resourcePath);
		//stream.pipe(res);
		stream.on('data', function(chunk){
			res.write(chunk);
		});

		stream.on('end', function(){
			res.end();
		});
	}
};