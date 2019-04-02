interface StackConstructor<T> {
    new <T>(n: number): Stack<T>
}
export class Stack<T>{
    private data: T[] = [];
    static readonly OVERFLOW = 'OVERFLOW';
    static readonly UNDERFLOW = 'UNDERFLOW';
    constructor(private size: number) {
    }
    push(item: T): number | string {
        return this.size > this.data.length ? this.data.push(item) : Stack.OVERFLOW;
    }
    pop(): T | string {
        return this.data.pop() || Stack.UNDERFLOW;
    }
    display(): void {
        this.data.forEach(item => console.log(item.toString()));
    }
}

class Employee{
	public id : number = 0;
	public name : string = '';

	display(){

	}
}


function initialise<T>(c: StackConstructor<T>, ...args: T[]): Stack<T> {
    return args.reduce((stack, item) => {
        stack.push(item);
        return stack;
    }, new c<T>(args.length));
}

var numberStack: Stack<number> = initialise<number>(Stack, 1, 2, 3, 4, 5, 6, 7, 8);
var stringStack: Stack<string> = initialise<string>(Stack, 'Yoda', 'Skywalker', 'Han Solo', 'R2', 'Wan');
numberStack.display();
stringStack.display();

var emp1 = new Employee();
emp1.id = 100;
emp1.name = 'Magesh';

var emp2 = new Employee();
emp2.id = 200;
emp2.name = 'Suresh';

var empStack : Stack<Employee> = initialise<Employee>(Stack,  emp1, emp2, { id : 300, name : 'Pen', display : () => {}});
empStack.display();

/*import { add } from './calculator';

import calculator from './calculator';

import fs from 'fs';
import { EventEmitter } from 'events';

console.log(fs);

console.log(add(1000,2000));

interface Product{
	id : number,
	name : string,
	cost : number,
	units : number
}

let products : Array<Product> = new Array<Product>();
products.push({id : 100, name : 'Pen', cost : 10, units : 100});
products.push({id : 101, name : 'Pencil', cost : 5, units : 200});
products.push({id : 102, name : 'Marker', cost : 30, units : 50});
products.push({id : 103, name : 'Scribble Pad', cost : 40, units : 60});


interface ProductPredicate{
	(product : Product) : boolean
}

function filterProducts(predicate : ProductPredicate){
	let result : Product[] = [];
	for(let product of products)
		if (predicate(product))
			result.push(product);
	return result;
}

let costlyProducts = filterProducts((product : Product) => product.cost > 10);

console.log(costlyProducts.length);

*/