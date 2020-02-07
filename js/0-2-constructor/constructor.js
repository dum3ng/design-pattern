function Person({ name, age } = {}) {
  this.name = name;
  this.age = age;
  return this;
}

Person.prototype.die = function() {};

const person = new Person();

console.log(person.prototype);
console.log(Person.prototype);
