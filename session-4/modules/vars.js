export var color = 'red';
export let name = 'Daniel';
export const MAGIC_NUMBER = 7;

// this will cause a syntax error, since
// export may only appear at the top level
// if(true) {
//   export var error = 'this is a syntax error'
// }