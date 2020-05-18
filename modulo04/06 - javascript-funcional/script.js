function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(2, 5));

function multiplicar(num1, num2) {
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado = somar(resultado, num1);
    }
    return resultado;
}

// Imutabilidade

let array = [1, 2, 3, 4, 5];

function mult(numeros) {
    let newNumeros = [];
    for(let i = 0; i < numeros.length; i++) {
        newNumeros[i] = numeros[i] * 2;
    }
    return newNumeros;
}
let newArray = mult(array);
console.log(array, newArray);

function nome(callback) {
    let name = 'React';
    callback(name);
}

function printName(name) {
    console.log(`Meu nome é ${name}`)
}

nome(printName);


// Métodos de Array

const animais = ['dog', 'cat', 'lion', 'bird'];

const numeros = [12, 13, 45, 46];

const newAnimais = animais.map((animal, index) => {
    return {
        name: animal,
        id: numeros[index],
        price: numeros[index] * 4
    }
});

console.log(newAnimais);

const idPar = newAnimais.filter(animal => {
    return animal.id % 2 === 0;
});

console.log(idPar);

const allPricesAnimals = newAnimais.reduce((total, proximo) => {
    return total + proximo.price;
}, 0)

console.log(allPricesAnimals);

