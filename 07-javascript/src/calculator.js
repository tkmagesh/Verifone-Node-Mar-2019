function add(x,y){
	function parseArg(n){
		return isNaN(n) ? 0 : parseInt(n);
	}
	return parseArg(x) + parseArg(y);
}