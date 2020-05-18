class Person {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    sayHello() {
        console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos e sou ${this.job}`);
    }
    get sayName() {
        console.log(`Meu nome é ${this.name}`);
    }
    set setName(newName) {
        this.name = newName;
    }
}

class User extends Person {
    constructor(name, age, job, email) {
        super(name, age, job);
        this.email = email;
    }
    sayUser() {
        super.sayHello();
        console.log(`Olá sou o usuário ${this.name} da aplicação X`);
    }
}


const Person1 = new Person('Hudson', 19, 'Web Developer');
Person1.sayHello();
Person1.sayName
Person1.setName = 'Holanda';

const User1 = new User('Luiz', 25, 'Designer', 'luiz@gmail.com');



