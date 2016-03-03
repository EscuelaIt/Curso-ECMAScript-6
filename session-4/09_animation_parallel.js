function getRandomTimeout() {
  return Math.floor(Math.random() * (1 - 5) + 5) * 1000;
};

function animation(position){
  console.log('Moving to position', position);
  return new Promise(function(resolve) {
    setTimeout(resolve, getRandomTimeout());
  });
};

Promise.all([
    animation(1),
    animation(2),
    animation(3),
    animation(4),
    animation(5),
    animation(6),
    animation(7),
    animation(8)
]).then(function() {
    animation(9);
});
