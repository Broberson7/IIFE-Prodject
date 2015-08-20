var global_base = 500;

function throwAway() {
	global_base += 500;
}

console.log ("global_base", global_base);

(function  () {
	var _internal_base = 100;
	var _internal_sum = _internal_base + global_base;

	console.log("_internal_sum", _internal_sum);

}());