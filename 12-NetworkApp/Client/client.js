var net = require("net"),
	MessageParser = require('./MessageParser');

var socket = net.connect(8080);
var messageParser = new MessageParser(socket);

messageParser.on('watching', (data)=>{
	console.log('The server has started watching the file, ', data.filename);
});

messageParser.on('change', (data) => {
	console.log('The file has changed at ' + data.timestamp);
});