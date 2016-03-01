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

var motorcycle = new Vehicle('yellow', 'Vespa');

console.log(motorcycle.whoami());
console.log(motorcycle.go());
