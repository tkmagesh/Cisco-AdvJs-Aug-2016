function SalaryCalculator(basic, hra, da, tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;

	/*this.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		var net = gross * ((100-this.tax)/100);
		this.salary = net;
	}*/
}
SalaryCalculator.prototype.calculate = function(){
	var gross = this.basic + this.hra + this.da;
	var net = gross * ((100-this.tax)/100);
	this.salary = net;
};


function Spinner(){
	var count = 0;
	this.up = function(){
		return ++count;
	};
	this.down = function(){
		return --count;
	}
}







var Spinner = (function(){
	function Spinner(){
		this.__count__ = 0;
	}
	Spinner.prototype.up = function(){
		return ++this.__count__;
	}
	Spinner.prototype.down = function(){
		return --this.__count__;
	}
	return Spinner;
})();













