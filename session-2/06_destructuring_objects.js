// object destructuring works exactly the same way as in arrays
let object = { one: 1, two: 2 };
let {one, two} = object;
console.log(one, two); // 1 2

// We can destructure values when passing arguments to a function
function suma({a, b} = {}) {
  return a + b;
};

// now, we can pass separate values
const three = 3;
const four = 4;
console.log(suma({a: three, b: four}));

// If the properties have the same name than the declared in the function definition, ES6 assigns them automatically
const a = 3;
const b = 4;
console.log(suma({a, b}));

// or, an object to get its properties destructured
const numbers = {
  a: 5,
  b: 6
};
console.log(suma(numbers));

// we can alias our destructured variables:
const persona = { nombre: 'Daniel', apellidos: 'de la Cruz' };
const { nombre: name, apellidos: surname } = persona;
console.log(name);
console.log(surname);
