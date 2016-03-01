var Vehicle = function Vehicle(color, model) {
  // Initialization
  this.color = color;
  this.model = model;
}

// Instance methods
Vehicle.prototype = {
  go: function go() {
    return "Brrooooom!";
  },
  whoami: function whoami() {
    return "I am a " + this.color + " " + this.model;
  }
}

var Car = function Car() {};
Car.prototype = new Vehicle('red', 'Ford');
Car.prototype.honk = function honk() { return "MOOOOC!" };
var car = new Car();
console.log(car.honk());             // MOOOOC!
console.log(car.go());               // Brrooooom!
console.log(car.color);              // red
console.log(car instanceof Car);     // true
console.log(car instanceof Vehicle); // true