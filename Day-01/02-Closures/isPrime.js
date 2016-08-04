Create a function that checks if the given number is a prime number or not.


isPrime(100); //=> runs the algo, return false
isPrime(101); //=> runs the algo, return true
isPrime(102); //=> runs the algo, return false

isPrime(100); //=> DO NOT run the algo, return false
isPrime(101); //=> DO NOT runs the algo, return true
isPrime(102); //=> DO NOT runs the algo, return false

function getPrimeFinder(){
	var cache = {};

	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3 )return true;
		for(var i=2; i <= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	}

	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n]
	}
}