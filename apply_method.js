function greet(name, age){
    console.log('My name is ${this.name}.');

}

const person = {

    name:'John'

};


greet.apply(person, ['Alice', 25]);

//Output:Hello, Alice! I am 25years old.

//My name is John.