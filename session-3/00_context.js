var Person = function Person(name) {
  this.name = name;
}

var myself = new Person('Dani');

// name solo existe dentro del contexto del objeto 'myself'
console.log(typeof name); // undefined
console.log(myself.name); // Dani

// Si utilizamos Person como una función no constructora:
Person('Joan');
console.log(name);