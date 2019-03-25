var callData = [
    { methodName: 'add', args : [ 'x', 'y', 'return x + y;'] },
	{ methodName: 'subtract', args : [ 'x', 'y', 'return x - y;'] },
	{ methodName: 'multiply', args : [ 'x', 'y', 'return x * y;'] },
	{ methodName: 'divide', args : [ 'x', 'y', 'return x / y;'] }
]

function construct(callData){
	var result = {};
	for( let cdata of callData){
		let { methodName, args } = cdata;
		result[methodName] = Function.apply(undefined, args);
    }
	return result;
}


var calc = construct(callData)