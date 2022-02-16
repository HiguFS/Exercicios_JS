function calculadora(valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
           return valor1 + valor2
            break
        case '-':
            return valor1 - valor2
            break
        case '/':
            return valor1 / valor2
            break
        case '*':
            return valor1 * valor2
            break
        default:
            return 'Operação Invalida'
    }
}
console.log( calculadora(3, '*', 5))
console.log( calculadora(3, '+', 5))
console.log( calculadora(3, '-', 5))
console.log( calculadora(3, '/', 5))
console.log( calculadora(3, 'x', 5))