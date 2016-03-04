// Un símbolo es un tipo de datos cuyos valores son únicos e inmutables
var COLOR_RED    = 'Red';
var COLOR_ORANGE = 'Orange';
var COLOR_YELLOW = 'Yellow';
var COLOR_GREEN  = 'Green';
var COLOR_BLUE   = 'Blue';
var COLOR_VIOLET = 'Violet';
var SKY_BLUE     = 'Blue';

function printColor(color){
  switch (color) {
    case COLOR_RED:
      console.log('Rojo');
      break;
    case COLOR_ORANGE:
      console.log('Naranja');
      break;
    case COLOR_YELLOW:
      console.log('Amarillo');
      break;
    case COLOR_GREEN:
      console.log('Verde');
      break;
    case COLOR_BLUE:
      console.log('Azul');
      break;
    case COLOR_VIOLET:
      console.log('Violeta');
      break;
    case SKY_BLUE:
      console.log('Azul cielo');
      break;
    default:
        throw new Exception('Unknown color: ' + color);
  }
}
printColor(COLOR_BLUE);
printColor(SKY_BLUE);

// Si lo convertimos a 
var COLOR_RED    = Symbol();
var COLOR_ORANGE = Symbol();
var COLOR_YELLOW = Symbol();
var COLOR_GREEN  = Symbol();
var COLOR_BLUE   = Symbol();
var COLOR_VIOLET = Symbol();
var SKY_BLUE     = Symbol();

printColor(COLOR_BLUE);
printColor(SKY_BLUE);


console.log(Symbol('foo'));
console.log(Symbol('foo').toString());

// Los símbolos usados como claves de objeto no entrarán
// en conflicto con otras claves
var myObj = {};  
var fooSym = Symbol('foo');  
var otherSym = Symbol('bar');  
myObj['foo'] = 'bar';  
myObj[fooSym] = 'baz';  
myObj[otherSym] = 'bing';  
console.log(myObj.foo === 'bar');  
console.log(myObj[fooSym] === 'baz');  
console.log(myObj[otherSym] === 'bing');  

// Lo podemos utilizar como propiedades de una clase
const _counter = Symbol();

class Visits {
  constructor({counter = 0} = {}){
    this[_counter] = counter;
  }

  add(){
    let counter = this[_counter];
    counter ++;
    this[_counter] = counter;
    return this[_counter];
  }
}

let visits = new Visits();
console.log(visits.add());

// No aparecen enumerados como propiedades del objeto
var fooSym = Symbol('foo');  
var myObj = {};  
myObj['foo'] = 'bar';  
myObj[fooSym] = 'baz';  
console.log(Object.keys(myObj)); // -> [ 'foo' ]  
console.log(Object.getOwnPropertyNames(myObj)); // -> [ 'foo' ]  
console.log(Object.getOwnPropertySymbols(myObj)); // -> [ Symbol(foo) ]  
console.log((Object.getOwnPropertySymbols(myObj)[0] === fooSym));