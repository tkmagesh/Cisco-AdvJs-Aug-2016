var products = [
	{id : 7, name : "Pen", cost : 60, units : 50, category : 1},
	{id : 9, name : "Hen", cost : 50, units : 70, category : 1},
	{id : 4, name : "Ten", cost : 30, units : 40, category : 2},
	{id : 6, name : "Den", cost : 70, units : 90, category : 2},
	{id : 1, name : "Zen", cost : 90, units : 20, category : 1}
]

/*
1. sort
2. filter
3. any
4. all
5. groupBy
6. reduce
7. map
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe("Default List", function(){
	console.table(products);
});

describe("Sort", function(){
	describe("Default [products by id]", function(){
		function sort(){
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});
	describe("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});
		describe("Products by units", function(){
			sort(products, "units");
			console.table(products);
		});
	});

	describe("Any list by any comparison", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("products by value [cost * units]", function(){
			function productComparerByValue(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value === p2Value) return 0;
				return 1;
			}
			sort(products, productComparerByValue);
			console.table(products);
		})
	})
	
});

describe("filter", function(){
	describe("products by category [1]", function(){
		function filterProductsByCategory1(){
			var result = [];
			for(var i=0; i < products.length; i++)
				if (products[i].category === 1)
					result.push(products[i]);
			return result;
		}
		var productsByCategory1 = filterProductsByCategory1();
		console.table(productsByCategory1);
	});

	describe("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i < list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		};


		function negate(criteria){
			return function(){
				return !criteria.apply(this, arguments);
			}
		}
		var category1Criteria = function(product){
			return product.category === 1;
		};
		/*var nonCategory1Criteria = function(product){
			return !category1Criteria(product);
		};*/

		var nonCategory1Criteria = negate(category1Criteria);

		describe("Category 1 products", function(){
			
			var productsByCategory1 = filter(products, category1Criteria);
			console.table(productsByCategory1);
		})
		
		describe("non Category 1 products", function(){
			
			var nonCategory1Products = filter(products, nonCategory1Criteria);
			console.table(nonCategory1Products);
		});

		var costlyProductCriteria = function(product){
			return product.cost > 50;
		};
		/*var affordableProductCriteria = function(product){
			return !costlyProductCriteria(product);
		};*/

		var affordableProductCriteria = negate(costlyProductCriteria);

		describe("Costly products [ cost > 50 ]", function(){
			
			var costlyProducts = filter(products, costlyProductCriteria);
			console.table(costlyProducts);
		})
		
		describe("Affordable products [ cost <= 50 ]", function(){
			
			var affordableProducts = filter(products, affordableProductCriteria);
			console.table(affordableProducts);
		})
	})
})

describe("All", function(){
	function all(list, predicate){
		for(var i=0; i < list.length; i++)
			if (!predicate(list[i])) return false;
		return true;
	}

	describe("Are all the products costly [cost > 50]", function(){
		var result = all(products, function(p){ return p.cost > 50; });
		console.log(result);
	});

});

describe("Any", function(){
	function any(list, predicate){
		for(var i=0; i < list.length; i++)
			if (predicate(list[i])) return true;
		return false;
	}

	describe("Are there any costly products [cost > 50]", function(){
		var result = any(products, function(p){ return p.cost > 50; });
		console.log(result);
	});

});

describe("GroupBy", function(){
	function groupBy(list, keySelectorFn){
		var result = {};
		for(var i=0; i < list.length; i++){
			var key = keySelectorFn(list[i]);
			/*if (typeof result[key] === 'undefined')
				result[key] = [];*/
			result[key] = result[key] || [];
			result[key].push(list[i]);
		}
		return result;
	}

	function printGroup(group){
		for(var key in group){
			var title = 'Key - ' + key;
			describe(title, function(){
				console.table(group[key]);
			});
		}
	}

	describe("Products by category", function(){
		var productsByCategory = groupBy(products, function(product){
			return product.category;
		});	
		printGroup(productsByCategory);
	});

	describe("Products by affordability", function(){
		var productsByAffordability = groupBy(products, function(product){
			return product.cost > 50 ? 'costly' : 'affordable';
		});
		printGroup(productsByAffordability);
	})
})

describe("Reduce", function(){
	function reduce(list, reducer, seed){
		var result = seed;
		for(var i=0; i < list.length; i++)
			result = reducer(result, list[i]);
		return result;
	};

	describe("Overall stock", function(){
		var totalStock = reduce(products, function(result, product){
			return result + product.units;
		},0);
		console.log(totalStock);
	});

	describe("Max units", function(){
		var maxUnits = reduce(products, function(result, product){
			return result > product.units ? result : product.units;
		},0);
		console.log(maxUnits);
	});

	describe("Over stocked product", function(){
		var result = reduce(products, function(result, product){
			return result.units > product.units ? result : product;
		},products[0]);
		console.table([result]);
	});
	function map(list, fn){
		var result = [];
		for(var i=0; i < list.length; i++)
			result.push(fn(list[i]));
		return result;
	}
	describe("Products with value [cost * units]", function(){
		var productsWithValue = map(products, function(product){
			return {
				name : product.name,
				value : product.cost * product.units
			};
		});
		console.table(productsWithValue);
	})
})