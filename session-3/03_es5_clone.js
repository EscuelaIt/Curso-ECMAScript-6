function clone(parent){
  var Clone = function() {};
  Clone.prototype = parent;
  return new Clone();
}

var car = { color: 'white' };
var ibiza = clone(car);
var leon = clone(car);
var toledo = clone(car);
toledo.color = 'blue';

console.log(ibiza.color); // white
console.log(leon.color); // white
console.log(toledo.color); // blue

car.color = 'black';

console.log(ibiza.color); // black
console.log(leon.color); // black
console.log(toledo.color); // blue