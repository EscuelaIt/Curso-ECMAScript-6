class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

// La clase padre asigna las coordenadas mediante super()
// La subclase sobreescribe el toString()
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `Punto dibujado en coordenadas ${super.toString()} de color ${this.color}`;
    }
}

const cp = new ColorPoint(25, 8, 'verde');
console.log(cp.toString()); // (25, 8) de color verde
console.log(cp instanceof ColorPoint) // true
console.log(cp instanceof Point) // true