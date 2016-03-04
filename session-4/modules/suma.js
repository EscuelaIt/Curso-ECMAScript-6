// export as default, when the module 
// itself represents the function
// export default function(a, b) {
//     return a + b;
// }

// equivalent to previous example
// function suma(a, b) {
//     return a + b;
// }

// export { suma as default };

// // When we don't use default, the module
// // is exported as an object that contains
// // the exported function, as it may contain
// // others
export function suma(a, b) {
  return a + b;
}

// // Podemos exportar más de una función
export function resta(a, b) {
  return a - b;
}

// o, exportar una de ellas como default:
export default function multiplicacion(a, b){
  return a * b;
}