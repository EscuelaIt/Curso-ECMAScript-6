class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

var p = new Point(25, 8);
console.log(p.toString()); //(25, 8)


// la clase no es más que una función!!
console.log(typeof Point); // function

// pero no puede ser utilizada directamente, solo con new
// Point();
// > TypeError: Classes can't be function-called

class Sample{
  constructor(value){
    this.value = value;
  }
  static staticMethod(){
    return 'Puedes llamar al método estático sin instanciar la clase';
  }
  prototypeMethod(){
    return 'Solo puedes llamar al método de prototipo mediante una instancia de la clase';
  }
}

const sample = new Sample(123);
console.log(sample);
console.log(Sample.staticMethod());
//console.log(Sample.prototypeMethod()); // TypeError: Sample.prototipo is not a function
console.log(sample.prototypeMethod());
//console.log(sample.staticMethod()); // TypeError: sample.staticMethod is not a function