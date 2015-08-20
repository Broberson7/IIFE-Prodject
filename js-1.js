var basicCarModule = {
	
	color: "blue",
	size: "sedan",

	options: {

		sunRoof: true,
		racingStripes: false,
		spoiler: true,
		leatherSeats: true,
		heatedSeats: true,
		underLighting: true
	},

	setspoilerOption: function (spoiler) {
		this.options.spoiler = spoiler;
	},

	setColor: function (color) {
		this.color = color;
	},

	setOptions: function (options) {
		this.options = options;
	}
}
console.log ("basicCarModule", basicCarModule);

basicCarModule.setColor("green")

console.log ("basicCarModule", basicCarModule);

basicCarModule.size = "minivan";

