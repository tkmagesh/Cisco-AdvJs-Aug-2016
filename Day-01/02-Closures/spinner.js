//create an object 'spinner'
function spinnerFactory(){
	var count  = 0;

	var obj = {
		up : function up(){
			return ++count;
		},
		down : function down(){
			return --count;
		}
	}

	return obj;
}

var spinner = spinnerFactory();



spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1



