"use strict";
function add(x, y) {
    return x + y;
}
var products = new Array();
products.push({ id: 100, name: 'Pen', cost: 10, units: 100 });
products.push({ id: 101, name: 'Pencil', cost: 5, units: 200 });
products.push({ id: 102, name: 'Marker', cost: 30, units: 50 });
products.push({ id: 103, name: 'Scribble Pad', cost: 40, units: 60 });
function filterProducts(predicate) {
    var result = [];
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (predicate(product))
            result.push(product);
    }
    return result;
}
var costlyProducts = filterProducts(function (product) { return product.cost > 10; });
console.log(costlyProducts.length);
