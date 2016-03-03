// for of crea un bucle que itera sobre objetos iterables.

var numbers = [1, 2, 3, 4];

for(const number of numbers){
  console.log(number);
}

// Creamos objeto iterable con una función next();
// Llamar a .next() nos dará un objeto coneniendo el valor,
// o indicándonos que no hay más valores
const numberIterator = numbers[Symbol.iterator]();
console.log(numberIterator.next())

// Hagamos un objeto que itere sobre las palabras de un string:
class LoremIpsum {
  constructor(text) {
    this._text = text;
  }

  [Symbol.iterator]() {
    const re = /\S+/g;
    const text = this._text;
    return {
      next() {
        const match = re.exec(text);
        if(match) {
          return { value: match[0], done: false };
        }
        return { value: undefined, done: true };
      }
    }
  }
}

const lorem = new LoremIpsum('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem eveniet ipsum in similique maxime sunt eaque veritatis sapiente. Fuga minus, non cumque deleniti consequatur. Odit reprehenderit non fugit cum!');

for (let word of lorem){
  console.log(word)
}

// Bonus: crea un array mediante spread a partir de un iterable
console.log([...lorem])
console.log(...lorem);