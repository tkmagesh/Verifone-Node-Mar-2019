var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	querystring = require('querystring'),
	calculator = require('./calculator');

/*
data-parser.js
serve-static.js
serve-calculator.js
not-found-handler.js
*/

var staticExtns = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'))).staticExtns;

function isStatic(resource){
	var resExtn = path.extname(resource);
	return staticExtns.indexOf(resExtn) >= 0;
}

var server = http.createServer(function(req /* IncomingMessage */, res /* ServerResponse */){
	var resourceName = req.url  === '/' ? 'index.html' : req.url,
		urlObj = url.parse(resourceName);

	console.log(req.method + '\t' + urlObj.pathname);

	if (isStatic(urlObj.pathname)){
		var resourcePath = path.join(__dirname, urlObj.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}

		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var data = querystring.parse(urlObj.query),
			op = data.op,
			x = parseInt(data.x),
			y = parseInt(data.y),
			result = calculator[op](x,y);

		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(rawData),
				op = data.op,
				x = parseInt(data.x),
				y = parseInt(data.y),
				result = calculator[op](x,y);

			res.write(result.toString());
			res.end();	
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);

server.on('listening', function(){
	console.log('webapp server listening on 8080')	
});
