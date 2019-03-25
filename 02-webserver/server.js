var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');


var server = http.createServer(function(req /* IncomingMessage */, res /* ServerResponse */){
	var resourceName = req.url  === '/' ? 'index.html' : req.url,
		urlObj = url.parse(resourceName),
		resourcePath = path.join(__dirname, urlObj.pathname);

	console.log(req.method + '\t' + urlObj.pathname);
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}

	var stream = fs.createReadStream(resourcePath);
	
	//stream.pipe(res);

	/* open, data, end, close, error */
	stream.on('data', function(chunk){
		res.write(chunk);
	});

	stream.on('end', function(){
		res.end();
	});
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080')	
});
