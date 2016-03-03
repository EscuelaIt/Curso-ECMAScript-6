
/** ES5 example **/
function runAnimation(position){
  console.log('Moving to position...', position);
};

runAnimation(0);
setTimeout(function() {
    runAnimation(1);
    setTimeout(function() {
        runAnimation(2);
    }, 1000);
}, 1000);
