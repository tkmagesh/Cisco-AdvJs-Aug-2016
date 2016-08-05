var Spinner = (function(){
	var countSymbol = Symbol();
	class Spinner{
		constructor(){
			this[countSymbol] = 0;
		}
		up(){
			return ++this[countSymbol];
		}
		down(){
			return --this[countSymbol];
		}
	}
	return Spinner;
})()

let evenNumbers = [10,11,12,13,14].filter(n => n % 2 === 0);

console.log(evenNumbers);

import Calculator from './Calculator';

var calc = new Calculator();
