function add(x,y){
	var args = arguments;
	console.log(`processing ${x} and ${y}`);
	var p = new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			if (args.length !== 2)
				rejectFn(new Error('Invalid argument error'));
            var result = x + y;
            console.log(`returning the result`);
            resolveFn(result);
        }, 5000);
	});
	return p;
}

var p = add(100,200);

var p2 = p.then(function(result){
	console.log(`@Client, result = ${result}`);
	return new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			resolveFn(result * 2);
        },5000);
	});
})

var p2 = p.then(function(result){
	console.log(`@Client, result = ${result}`);
	return new Promise(function(resolveFn, rejectFn){
		resolveFn(result * 2);
	});
})

var p2 = p.then(function(result){
	console.log(`@Client, result = ${result}`);
	return Promise.resolve(result * 2);
})

var p2 = p.then(function(result){
	console.log(`@Client, result = ${result}`);
	return result * 2;
})