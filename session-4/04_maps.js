let course = new Map();
course.set('title', 'Aprende ECMAScript 2015');
course.set('sessions', 6);

console.log([...course])

console.log(course.get('title'));
console.log(course.get('sessions'));

let map = new Map(),
    key1 = {},
    key2 = {};

map.set(key1, 5);
map.set(key2, 42);

console.log(map.get(key1));
console.log(map.get(key2));