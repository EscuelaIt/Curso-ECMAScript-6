var Vehicle = function Vehicle() {
  console.log('Sólo soy una función!');
}

Vehicle.prototype.wheelCount = 4;

var truck = new Vehicle();
console.log(truck.wheelCount); // 4

// 
Vehicle.prototype.wheelCount = 6;
console.log(truck.wheelCount);

// modificar wheelCount en la instancia no modifica 
// el prototype de la función constructora
truck.wheelCount = 8;
console.log(Vehicle.prototype.wheelCount);
console.log(truck.wheelCount);

// wheelCount ya no está delegado
Vehicle.prototype.wheelCount = 10;
console.log(truck.wheelCount);

// obviamente siempre podemos hacer lo mismo con métodos, ya que
// un método no es más que una función asignada a una propiedad:
Vehicle.prototype.go = function go() { return 'Brooommmm!' };
console.log(truck.go());