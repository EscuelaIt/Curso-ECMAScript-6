let map = new WeakMap();
let element = {};

map.set(element, "Original");

let value = map.get(element);
console.log(value);             // "Original"

// remove the element
element = null;

// the weak map is empty at this point
console.log(map.get(element));