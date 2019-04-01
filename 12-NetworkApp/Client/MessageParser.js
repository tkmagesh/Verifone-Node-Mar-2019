var events = require('events'),
	EventEmitter = events.EventEmitter;

class MessageParser extends EventEmitter{
	constructor(socket){
		super();
		socket.setEncoding("utf8");
		let rawData = '';
		socket.on('data', (chunk) => {
			rawData += chunk;
		    while(rawData.indexOf('\n') !== -1){
		    	var rawMessage = rawData.substr(0, rawData.indexOf('\n'));
		    	rawData = rawData.substr(rawData.indexOf('\n')+1)
		    	var message = JSON.parse(rawMessage);
		    	this.emit(message.type, message)
		    }
		});
	}
}

module.exports = MessageParser;