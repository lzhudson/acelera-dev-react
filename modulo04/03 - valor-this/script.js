let User = {
    name: 'Hudson',
    lastName: 'Holanda',
    sayName: function() {
        console.log(`My name is ${this.name}`);
    }
}
User.sayName();

let sayEntireName = function(num1, num2) {
    console.log(`My entire name is ${this.name} ${this.lastName}`);
    console.log(num1, num2);
}
sayEntireName.call(User, 1, 2);
sayEntireName.apply(User, [10, 20]);
let myName = sayEntireName(User, 12, 34);

let showLoggedUser = function() {
   let that = this;
    let sayName = function() {
        return `Meu nome ${that.name}`;
    }
    return `O usuario logado é: ${sayName()}`;
}
console.log(showLoggedUser.call(User));
