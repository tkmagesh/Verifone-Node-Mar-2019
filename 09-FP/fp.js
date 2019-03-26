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
		function sort(/*....*/){

		}
		describe('Products by Cost', function(){
			//sort();
			console.table(products)
		});

		describe('Products by Units', function(){
			//sort
			console.table(products);
		});
	});
});

/*describe('Filtering', function(){
	describe('Default filter [stationary]', function(){
		//filter()
		console.table(products);
	});
});*/