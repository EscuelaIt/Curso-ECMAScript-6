// import suma from './suma';

// console.log(suma)
// console.log(suma(2, 2));

// // Cuando no usamos default (comentar
// // el import anterior de suma)
// import {suma, resta} from './suma';
// console.log(suma);
// console.log(resta);

// // También podemos importarlo todo, y veremos
// // la estructura del módulo
import * as mathematics from './suma';
console.log(mathematics.default);

// // import variables
// import {color, name, MAGIC_NUMBER} from './vars'
// console.log(color, name, MAGIC_NUMBER)

// // import an exported function as default
// import multiplica from './mathematics'
// console.log(multiplica(3, 2))

// // import an aliased function
// import {saluda} from './aliases'
// console.log(saluda('hola'))
// console.log(saluda)


// // Si tiene una función como default, podemos:
// import mathematics from './suma';
// console.log(mathematics)
// console.log(mathematics(2, 3))

// import Persona from './persona'
// var dani = new Persona('dani', 'de la Cruz')
// console.log(dani)