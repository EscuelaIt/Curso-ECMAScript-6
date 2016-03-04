const readonly = (target, name, descriptor) => {
    descriptor.writable = false;
    return descriptor;
};

class Person {
  constructor({first, last}){
    this.first = first;
    this.last = last;
  }

  @readonly
  name() { return `${this.first} ${this.last}` }
}

const person = new Person({
  first: 'Dani',
  last: 'de la Cruz'
});

console.log(person.name());
person.name = () => { return `${this.first}` }