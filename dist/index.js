"use strict";
// Calculadora básica usando prompt e alert escrita em TypeScript 
let terminou = false;
let op;
function escolherOpcao() {
    let opcao;
    let escolheu = false;
    while (!escolheu) {
        opcao = prompt('Escolha uma operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n0. Sair');
        if (opcao === '1' || opcao === '2' || opcao === '3' || opcao === '4' || opcao === '0') {
            escolheu = true;
        }
        else {
            alert('Opção inválida. Tente novamente.');
        }
    }
    return opcao;
}
let num1 = Number(prompt('Digite o primeiro número:'));
let num2 = Number(prompt('Digite o segundo número:'));
function soma(num1, num2) {
    return num1 + num2;
}
function subtracao(num1, num2) {
    return num1 - num2;
}
function multiplicacao(num1, num2) {
    return num1 * num2;
}
function divisao(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    }
    else {
        alert('Erro: divisão por zero.');
        return NaN; // Retornar NaN (Not a Number) em caso de divisão por zero
    }
}
while (!terminou) {
    op = escolherOpcao();
    switch (op) {
        case '1':
            alert('Resultado: ' + soma(num1, num2));
            break;
        case '2':
            alert('Resultado: ' + subtracao(num1, num2));
            break;
        case '3':
            alert('Resultado: ' + multiplicacao(num1, num2));
            break;
        case '4':
            alert('Resultado: ' + divisao(num1, num2));
            break;
        case '0':
            terminou = true;
            alert('Calculadora encerrada.');
            break;
        default:
            alert('Opção inválida.');
            break;
    }
}
