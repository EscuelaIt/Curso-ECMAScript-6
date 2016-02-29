// Sin spread operator
function tag(strings, arg1, arg2){
  console.log(strings)
  console.log(arg1)
  console.log(arg2)
  console.log(arguments)
}

const pepito = 'Pepito';
const jose = 'Jose';

console.log(tag`Hola, don ${pepito}, hola don ${jose}`);

// Con spread operator
function newTag(strings, ...args) {
  console.log(strings)
  console.log(args)
}

console.log(newTag`Hola, don ${pepito}, hola don ${jose}`);