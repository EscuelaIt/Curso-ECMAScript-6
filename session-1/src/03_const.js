const USER = {
  name: 'Daniel',
  surname: 'de la Cruz',
  age: 32
};

USER.name = 'Joan';
USER.age = 'cuarenta';
USER.kk = 3;

delete USER.age;

console.log(USER);
const LIGHT = '#AAA';

const colors: {
  background: LIGHT
}