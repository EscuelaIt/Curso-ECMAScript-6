// ES5
function drawCircle(options){
    options = options === undefined ? {} : options;
    var radius = options.radius === undefined ? 30 : options.radius;
    var coords = options.coords === undefined ? { x: 0, y: 0 } : options.coords;

    console.log(radius, coords);
    // finally, draw the circle
}

// ES6
function drawCircle({radius = 30, coords = { x: 0, y: 0}} = {}) {
    console.log(radius, coords);
    // draw the circle
};

drawCircle(); // radius: 30, coords.x: 0, coords.y: 0 }
drawCircle({radius: 10}); // radius: 10, coords.x: 0, coords.y: 0 }
drawCircle({coords: {y: 10, x: 30}, radius: 10}); // radius: 10, coords.x: 30, coords.y: 10 }

function sayHello({
    name = 'Joan', 
    surname = 'Leon'
  } = {}) {
    console.log('Hello', name, surname);
};

sayHello();