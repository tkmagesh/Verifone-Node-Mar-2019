function add(x,y){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(undefined, n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1));
}

/*
	arguments
		- array like object
			indexer
			length
	this

	As a method of an obj
		this -> obj

	As a function
		this -> global (window)

	using the call method

	using the apply method

*/