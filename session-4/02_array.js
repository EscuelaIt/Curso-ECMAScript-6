// El método Array.of() crea una nueva instancia Array 
// con un número variable de elementos pasados como argumento, 
// independientemente del número o del tipo.

// La diferencia entre Array.of() y el constructor Array reside 
// en como maneja los parámetros de tipo entero: Array.of(42) 
// crea un array con un solo elemento, 42, mientras Array(42) 
// crea un array con 42 elementos, el cual, cada uno es de tipo undefined.

let items = new Array(1, 2);        // length is 2
console.log(items.length);          // 2
console.log(items[0]);              // 1
console.log(items[1]);              // 2

items = new Array(2);
console.log(items.length);          // 2
console.log(items[0]);              // undefined
console.log(items[1]);              // undefined

items = Array.of(2);
console.log(items.length);          // 1
console.log(items[0]);              // 2


function doSomething(){
  console.log(arguments);
  console.log(typeof arguments);
  // arguments "parece un array, pero no lo es. Lo siguiente da error"
  // console.log(arguments.map(a => a));

  // Podemos convertirlo en un array con Array.from
  let args = Array.from(arguments);
  console.log(args.map(a => a));
}

doSomething(1, 2, 3);



let numbers = [25, 30, 35, 40, 45];

console.log(numbers.find(n => n > 33));         // 35
console.log(numbers.findIndex(n => n > 33));    // 2



let numbers = [1, 2, 3, 4];
numbers.fill(1, 2);
console.log(numbers.toString());    // 1,2,1,1
numbers.fill(0, 1, 3);
console.log(numbers.toString());    // 1,0,0,1