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