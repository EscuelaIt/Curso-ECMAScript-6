
/** ES6 Promises example **/
function runAnimation(position){
  console.log('Moving to position...', position);
};

function delay(interval){
  return new Promise(function(resolve) {
    setTimeout(resolve, interval);
  });
};

runAnimation(0);
delay(1000)
  .then(function() {
    runAnimation(1);
    return delay(1000);
  })
  .then(function() {
    runAnimation(2);
  });
