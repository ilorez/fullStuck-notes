class Cercle {

	constructor(rayon, color) {
		this.rayon = rayon;
		this.color = color;
	}
	calculerSurface() {
		console.log(this.rayon)
		// let v = 3.14 * ((this.rayon) ** 2);
		return 3.14 * ((this.rayon) ** 2);
	}
	affiche() {
		return `surface: ${this.calculerSurface()} color:${this.color} `
	}

}

let c1 = new Cercle(3, '#ccc');

console.log(c1.calculerSurface())
// console.log("1")