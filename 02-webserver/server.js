var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');


var server = http.createServer(function(req /* IncomingMessage */, res /* ServerResponse */){
	var resourceName = req.url  === '/' ? 'index.html' : req.url,
		resourcePath = path.join(__dirname, resourceName);

	console.log(req.method + '\t' + resourceName);
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}

	var stream = fs.createReadStream(resourcePath);
	stream.pipe(res);
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080')	
});
