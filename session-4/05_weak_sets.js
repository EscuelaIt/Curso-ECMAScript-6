// Los Sets podemos considerarlos Strong Sets,
// ya que conservan la referencia a sus claves 
// aunque el objeto original sea eliminado
let set = new Set(),
    key = {};

set.add(key);
console.log(set.size);      // 1

// eliminate original reference
key = null;

console.log(set.size);      // 1

// get the original reference back
key = [...set][0];

// Esto puede causar un memory leak, por ejemplo si
// nuestro código se ejecuta en una página web que
// mantiene un registro de elementos del DOM que 
// podrían ser eliminados por otro script

// Un weak set es un tipo de set que solo almacena una 
// referencia "débil" al objeto
let weakSet = new WeakSet();
let weakKey = {};

// add the object to the set
weakSet.add(weakKey);

console.log(weakSet.has(weakKey));      // true

weakSet.delete(weakKey);

console.log(weakSet.has(weakKey));      // false
