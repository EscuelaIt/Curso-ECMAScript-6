

class Users {
  constructor(people) {
    this._people = people;
  }
  *alias(){
    for (let person of this._people){
      yield person.sex === 'M' ? `Mr. ${person.name}`
                               : `Mrs. ${person.name}`;
    }
  }
}

const users = new Users([
  { sex: 'M', name: 'John' }, 
  { sex: 'W', name: 'Lucia' }
]);

for (let person of users.alias()){
  console.log(person)
}