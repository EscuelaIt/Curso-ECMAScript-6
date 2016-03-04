
// Reflect.has
var myObject = {
  foo: 1
};

console.log('foo' in myObject);
console.log(Reflect.has(myObject, 'foo'));