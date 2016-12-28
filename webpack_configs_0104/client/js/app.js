console.log("hello world");

class Person {
  constructor(name, age) {
    Object.assign(this, { name, age });
  }
}

const person = new Person('tom sawyer', 44);
console.log(person);
const { name, age } = person

console.log(`${name} is ${age} old!`);

const view = require("raw!jade-html?pretty=true!../views/index.jade");
console.log(view)
document.body.innerHTML = view;
