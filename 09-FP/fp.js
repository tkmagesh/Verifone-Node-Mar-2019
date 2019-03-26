var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
];

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}


describe('Default List', function(){
	console.table(products);
});

describe('Sorting', function(){
	describe('Default Sorting [Products by id]', function(){
		function sort(){
			for(var i = 0; i < products.length-1; i++)
				for(var j = i + 1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products)
	});

	describe('Any list by any attibute', function(){
		function sort(list, attrName){
			for(var i = 0; i < list.length-1; i++)
				for(var j = i + 1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe('Products by Cost', function(){
			sort(products, 'cost');
			console.table(products)
		});

		describe('Products by Units', function(){
			sort(products, 'units');
			console.table(products);
		});
	});

	describe('Any list by any comparer', function(){
		function sort(list, comparerFn){
			for(var i = 0; i < list.length-1; i++)
				for(var j = i + 1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}

		describe('Products by value [ cost * units ]', function(){
			var compareProductsByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0;
			}

			sort(products, compareProductsByValue);
			console.table(products);
		});
	})
});

describe('Filtering', function(){
	describe('Default filter [stationary]', function(){
		function filterStationaryProducts(){
			var result = [];
			for(var index = 0, count = products.length; index < count; index++){
				if (products[index].category === 'stationary')
					result.push(products[index]);
			}
			return result;
		}
		var stationaryProducts = filterStationaryProducts();
		console.table(stationaryProducts);
	});

	describe('Any list by any criteria', function(){
		function filter(list, criteriaFn){
			var result  = [];
			for(var index = 0, count = list.length; index < count; index++){
				if (criteriaFn(list[index]))
					result.push(list[index]);
			}
			return result;
		}

		function negate(criteria){
			return function(){
				return !criteria.apply(undefined, arguments);
			}
		}

		describe('Filter products by cost', function(){
			var costlyProductCriteria = function(product){
				return product.cost > 50;
			};

			describe('Cost products [cost > 50]', function(){
				var costlyProducts = filter(products, costlyProductCriteria);
				console.table(costlyProducts);
			});

			describe('Affordable products [ cost <= 50]', function(){
				/*var affordableProductCriteria = function(product){
					return product.cost <= 50;
				}*/
				var affordableProductCriteria = negate(costlyProductCriteria);
				var affordableProducts = filter(products,affordableProductCriteria);
				console.table(affordableProducts);
			});

		});

		describe('Filter products by units', function(){
			var underStockedCriteria = function(product){
				return product.units <= 60;
			};
			describe('Under stocked products [units <= 60]', function(){
				var underStockedProducts = filter(products, underStockedCriteria);
				console.table(underStockedProducts);
			});

			describe('Well stocked products [units > 60]', function(){
				/*var wellStockeProductCriteria = function(product){
					return product.units > 60;
				}*/
				var wellStockeProductCriteria = negate(underStockedCriteria);
				var wellStockeProducts = filter(products, wellStockeProductCriteria);
				console.table(wellStockeProducts);
			})
		});
	});
});