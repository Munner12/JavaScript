function greet(){
    console.log('Hello, ${this.name}!');

}

const person = {
    name: 'John'
};

const greetPerson = greet.bind(person);
greetPerson();

//Output: Hello, John!