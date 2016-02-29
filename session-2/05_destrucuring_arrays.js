const numbers = ['1', '2', '3'];

// without destructuring
const one   = numbers[0];
const two   = numbers[1];
const three = numbers[2];

// with destructuring
const [uno, dos, tres] = numbers;

console.log(one, two, three);
console.log(uno, dos, tres);

// also, without assignment:
let ichi, ni, san;
[ichi, ni, san] = ['uno', 'dos', 'tres'];

console.log(ichi, ni, san);

// destructuring assignment returning values from a function
function users(){
  return ['joan', 'carlos', 'david', 'dani'];
}

let [joan, carlos, david, dani] = users();
console.log(joan, carlos, david, dani);
