function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === 'undefined')
            cache[key] = fn.apply(undefined, arguments);
        return cache[key];
    }
}