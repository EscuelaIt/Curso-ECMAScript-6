var a = 'I am global';

function foo(){
  let b = 'I am local';
  console.log('Existe a en el alcance local?', !!a);
  console.log('Existe b en el alcance local?', !!b);

  if(true){
    let c = 'Soy una variable de la condición if';
  }

  let c = 3;

  console.log('cuanto vale c?', c);

  // console.log('Existe c fuera del if?', !!c);

  for(let d = 0; d < 10; d++){
    // ...
  }

  // console.log('Existe d fuera del for?', !!d);
}

foo();
// console.log('Existe a en el alcance global?', !!a);
// console.log('Existe b en el alcance global?', !!b);