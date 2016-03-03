// Los generadores son funciones que pueden ser
// pausadas y resumidas 
function* generatorFunction() {
    console.log('First');
    yield;
    console.log('Second');
}

// cuando llamamos a la función generador, no ejecuta
// el cuerpo de la función, sino que devuelve un objeto generador:
const generatorObject = generatorFunction();

// El generador implementa una interfaz que le proporciona
// un método next(), que ejecutará el cuerpo de la función
// hasta encontrar un yield. En este punto, se detendrá.
// 
// La función además devuelve un objeto de tipo:
// {
//   value: el valor retornado por yield
//   done: indica si ha finalizado la ejecución del cuerpo de la función
// }
console.log(generatorObject.next());

// Si volvemos a llamar, done valdrá true porque ya ha finalizado
// la ejecución del cuerpo de la función
console.log(generatorObject.next());

// A partir de este punto, siempre valdrá true
console.log(generatorObject.next());

// Los generadores, al implementar .next(), son iterables
function* abc() {
  yield 'a';
  yield 'b';
  yield 'c';
}

for (const char of abc()) {
    console.log(char);
}

const alphabet = [...abc()];
console.log(alphabet);

const [a, b, c] = abc();
console.log(a);
console.log(b);
console.log(c);

// Los generadores suelen ser una forma más sencilla de describir un iterador.
// Volviendo al ejemplo de antes:
class LoremIpsum {
  constructor(text) {
    this._text = text;
  }

  *words() {
    const re = /\S+/g;
    let match;
    while(match = re.exec(this._text)){
      yield match[0];
    }
  }
}

const lorem = new LoremIpsum('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem eveniet ipsum in similique maxime sunt eaque veritatis sapiente. Fuga minus, non cumque deleniti consequatur. Odit reprehenderit non fugit cum!');

for (let word of lorem.words()){
  console.log(word)
}

class Users {
  constructor(people) {
    this._people = people;
  }

  *alias() {
    for (let person of this._people) {
      yield person.sex === 'M' ? `Mr. ${person.name}`
                               : `Mrs. ${person.name}`;
    }
  }
}

const people = new Users([
  {sex: 'M', name: 'John' }, 
  { sex: 'W', name: 'Lucia' }
]);

for (let person of people.alias()){
  console.log(person)
}
