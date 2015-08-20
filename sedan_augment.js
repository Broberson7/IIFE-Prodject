var Sedan = (function(sedan) {
	var max_occupancy = 6;
	var current_occupancy = 0;


	sedan.setOccpancy = function(occcupancy) {
		if (occcupancy <= max_occupancy) {
			current_occupancy = occcupancy;
		} else {
			throw "Cannot exceed maximum occupancy of " + max_occupancy;
		}
	};
	sedan.getOccupancy = function() {
		return current_occupancy;

	};

	return	sedan;

	

})(Sedan);

console.log(Sedan);