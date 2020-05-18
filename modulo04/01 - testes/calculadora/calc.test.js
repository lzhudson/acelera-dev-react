const calculadora = require('./calc');

describe('Calculadora', () => {
    it('teste exemplo', () => {
        const numero1 = 23;
        const numero2 = 7;
        expect(23 + 7).toBe(30);
        expect(23 + 7).not.toBe(31);
    })

    describe('Soma', () => {
        it('retorna 3 quando 2 é somado com 1', () => {
            const num1 = 2;
            const num2 = 1;
            expect(calculadora.soma(num1, num2)).toBe(3);
        })
    });
    describe('Subtração', () => {
        it('retorna 1 quando 1 é subtraido de 2', () => {
            const num1 = 2;
            const num2 = 1;
            expect(calculadora.subtracao(num1, num2)).toBe(1);
        })
    });
    describe('Multiplicação', () => {
        it('retorna 6 quando 2 é multiplicado por 3', () => {
            const num1 = 2;
            const num2 = 3;
            expect(calculadora.multiplicacao(num1, num2)).toBe(6);
        })
    });
    describe('Divisão', () => {
        it('retorna 2 quando 10 é divido por 5', () => {
            const num1 = 10;
            const num2 = 5;
            expect(calculadora.divisao(num1, num2)).toBe(2);
        })
    });
    describe('Divisão', () => {
        it('retorna 0 quando o dividendo é 0', () => {
            const num1 = 10;
            const num2 = 0;
            expect(calculadora.divisao(num1, num2)).toBe(0);
        })
    });
});
