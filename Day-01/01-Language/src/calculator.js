/*function add(x,y){
	function parseArg(n){
		if (n instanceof Array) return add.apply(this , n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	//return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments,1));
}*/

function add(...numbers){
	function parseArg(n){
		if (n instanceof Array) return add(...n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	//return numbers.length <= 1 ? parseArg(numbers[0]) : parseArg(numbers[0]) + add(numbers.slice(1));
	return numbers.reduce((n1, n2) => parseArg(n1) + parseArg(n2), 0);
}