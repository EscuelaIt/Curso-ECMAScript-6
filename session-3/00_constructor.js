// cualquier función utilizada como un constructor se convierte en un constructor :)
var Vehicle = function Vehicle() {
  console.log('Sólo soy una función!');
}

var motorcycle = new Vehicle();

console.log(typeof Vehicle); // function
console.log(typeof Vehicle()); // undefined
console.log(typeof new Vehicle()); // object

// NOTA: No es aconsejable retornar ningún valor en funciones constructoras, 
// ya que el valor retornado sobreescribirá la instancia del objeto creado

 // motorcycle tiene una propiedad constructor que es la función Vehicle
console.log(motorcycle.constructor === Vehicle);

// motorcycle es UNA INSTANCIA de Vehicle
console.log(motorcycle instanceof Vehicle);

// la propiedad constructor no aparece si enumeramos las propiedades de motorcycle
console.log(motorcycle);

// Pero podemos crearla y sobreescribirla
var Postman = function Postman() {};
motorcycle.constructor = Postman;

console.log(motorcycle);

// Pero, sigue siendo una instancia de Vehicle?
console.log(motorcycle.constructor === Postman);
console.log(motorcycle instanceof Postman);
console.log(motorcycle instanceof Vehicle);