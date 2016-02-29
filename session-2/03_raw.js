const raw = function(strings, args) {
  return strings.raw[0];
}
console.log(raw`Hello!\n`);
console.log('next line');
console.log(`Hello!\n`);
console.log('next line');