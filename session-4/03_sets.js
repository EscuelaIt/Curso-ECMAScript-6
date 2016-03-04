// Un set es una lista de valores que no puede contener
// duplicados.
let es5Set = {};
es5Set.foo = true;

// checking for existence
if (es5Set.foo) {
  console.log('do something')
}

// Un set en ES6 se define de la forma siguiente:
let set = new Set();
set.add('foo');
console.log(set.has('foo'));

console.log(set.entries());

set.forEach(v => console.log(v))
for (let item of set) console.log(item);

var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

console.log(mySet.has("value1")); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray