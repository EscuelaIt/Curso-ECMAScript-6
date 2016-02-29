// El operador de propagación spread operator permite que una 
// expresión sea expandida en situaciones donde se esperan múltiples 
// argumentos (llamadas a funciones) o múltiples elementos 
// (arrays).

const values = [1, 2, 3, 4];

console.log(values); // returns an array
console.log(...values); // spreads the array and returns the values

// We can define a spread parameter
function f(args) {
  return args.length;
}

console.log('Without spreading', f(1, 2, 3));

function fspread(...args) {
  return args.length;
}

console.log('With spreading', fspread(1, 2, 3));

// We can also spread on passing the arguments
function suma(x, y, z) {
  return x + y + z;
}

console.log(suma(...[1, 2, 3])); // 6

// Spread object properties
const worker = {
  id: 1337,
  name: 'John',
  surname: 'Woo',
  age: 35,
  job: 'UI designer'
};

const customize = function(worker){
  return {
    ...worker,
    fullName: `Mr./Mrs. ${worker.surname}, ${worker.name}`,
    age: `${worker.age} years old`
  };
};

console.log(customize(worker));
