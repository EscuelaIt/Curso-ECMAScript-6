const tag = function(strings, args) {
  return strings.map(function(s){
    return s.split('').map(function(s){
      return `${s}.`;
    })
    .join('')
  })
  .join('');
}

console.log(tag`Hello, World!`);