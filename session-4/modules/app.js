import suma from './suma';

console.log(suma)
console.log(suma(2, 2));

// import variables
import {color, name, MAGIC_NUMBER} from './vars'
console.log(color, name, MAGIC_NUMBER)

// import an exported function as default
import multiply from './mathematics'
console.log(multiply(3, 2))

// import an aliased function
import {saluda} from './aliases'
console.log(saluda('hola'))
console.log(saluda)

// Cuando no usamos default (comentar
// el import anterior de suma)
// import {suma} from './suma';
// import * as mathematics from './suma';
// console.log(suma);
// console.log(mathematics);

// Si tiene una función como default, podemos:
// import mathematics from './suma';
// console.log(mathematics)
// console.log(mathematics(2, 3))
