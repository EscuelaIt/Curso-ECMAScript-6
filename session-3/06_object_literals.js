// un object literal es una lista de pares de clave-valor
// rodeados por corchetes
var myObject = {
  name: 'Daniel',
  age: 32,
  married: true
}

// pueden ser de cualquier tipo
var mySuperCoolObject = {
    images: ["one.gif", "two.gif", "three.gif", "four.gif"],
    location: {
        x: 40.8374,
        y: 300.1771
    },
    move: function(x, y) {
        this.location.x += x;
        this.location.y += y;
    }
};

const myES6Object = {
  foo(){
    // ...
  },
  bar(x, y){
    // ...
  }
}

const propertyKey = 'foo';
const ar = 'ar';
const object = {
    [propertyKey]: true,
    [`b${ar}`]: 123
};

console.log(object)

const methodKey = 'greeting';
const yetAnotherObject = {
  [methodKey]() {
    return 'Hello!';
  }
};

console.log(yetAnotherObject.greeting())