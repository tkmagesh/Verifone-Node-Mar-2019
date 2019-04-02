var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
	{id : 2, name : 'Pen-2', cost : 150, units : 20, category : 'stationary'},
	{id : 4, name : 'Ten-2', cost : 770, units : 70, category : 'stationary'},
	{id : 7, name : 'Len-2', cost : 360, units : 60, category : 'grocery'},
	{id : 8, name : 'Zen-2', cost : 530, units : 30, category : 'grocery'},
	{id : 10, name : 'Ken-2', cost : 120, units : 80, category : 'utencil'},
];

function* filter(gen, predicate){
	for(let item of gen){
		console.log('filter', item.id);
		if (predicate(item))
			yield item;
	}
	return;
}

function* map(gen, transform){

	for(let item of gen){
		console.log('map ', item.id);
		yield transform(item);
	}
}

function* first(gen, count){
	var counter = 0;
	for(let item of gen){
		console.log('first ', item.id);
		if (++counter <= count) {
			yield item;
        }
		return item;
    }		
}

var processedList = 
	first(map(filter(products, p => p.category === 'grocery'), p => ({...p, value : p.cost * p.units})), 2)
