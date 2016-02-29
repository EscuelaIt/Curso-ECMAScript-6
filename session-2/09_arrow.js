const echo = text => text;
console.log(echo('Hello, arrow functions!'));

// with arguments
const suma = (a, b, c) => a + b + c;
console.log(suma(1, 2, 3));

// or without
const greet = () => 'Hi again!';
console.log(greet());

// other es6 function improvements are also valid here
const concat = (...args) => args.join(', ');
console.log(concat('one', 'two', 'three', 'four'));

// For complex operations, we can give the arrow function a body
const resize = ({x, y}, ratio) => {
  return {
    x: x * ratio,
    y: y * ratio
  };
};

console.log(resize({x: 5, y: 15}, 100));
