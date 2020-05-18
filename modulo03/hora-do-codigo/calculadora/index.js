const calculadora = require('./calc');
const promptSync = require('prompt-sync');
const prompt = promptSync();

function options() {
    console.log(`
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        0 - Sair
        `)
}

function optionSelected(option) {
    if(option === '0') return 'Você saiu';

    const num1 = Number(prompt('Digite numero 1: '));
    const num2 = Number(prompt('Digite numero 2: '));
    
    if(option === '1') {
        return calculadora.soma(num1, num2);
    } else if(option === '2') {
        return calculadora.subtracao(num1, num2);
    } else if(option === '3') {
        return calculadora.multiplicacao(num1, num2);
    } else if(option === '4') {
        return calculadora.divisao(num1, num2);
    }
}


let option;
while(option != '0') {
    options();
    option = prompt('Escolha uma opção ?');  
    const resultado = optionSelected(option);
    console.log(resultado);
}

