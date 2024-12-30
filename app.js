let texto = document.querySelector ('h1');
texto.innerHTML = 'Hora do desafio';

function qConsole() {
    console.log('o botao Console foi clicado');
}

function qAlert() {
    alert('Eu amo Js');
}

function qPrompt() {
    let cidade = prompt('diga uma cidade');

    alert(`Passei por ${cidade} e lembrei de voce`);
}

function qSoma() {
    let numero1 = Number(prompt('diga um numero'));
    let numero2 = Number(prompt('diga outro'));
    let soma = numero1 + numero2;

    alert(`O resultado da soma foi ${soma}`);
}

// exerc func

// 1.
helloWord();
function helloWord() {
    console.log ('ola mundo');
}

//2.
exibirNome = ('joao');
function exibirNome(nome) {
    console.log (`ola meu nome é ${nome}`);
}

//3.
function dobro(numero) {
    return numero * 2
}

let resultado = dobro(parseInt(Math.random() * 100 + 1));
console.log(resultado);

//4.
function ha(a, b, c) {
    return (a + b + c) / 3;
}

let result = ha(2, 3, 4);       
console.log(result);

//5.
function aq(e, r) {
    return e > r ? e : r;
}

let maior = aq(parseInt(Math.random() * 100 + 1), parseInt(Math.random() * 100 + 1));
console.log(maior);

//6. 
function exp(t) {
    return t * t
}

let numExp = exp(parseInt(Math.random() * 10 + 1));
console.log(numExp);

//exerc ren o game

//1.
function calcularIMC(m, kg) {
    return m / (kg * kg)
}

let resultadoIMC = calcularIMC(Number(prompt('qual o sua altura')),
    Number(prompt('qual o seu peso')));
console.log(resultadoIMC);

//2.
function dolarParaReal(money) {
    let cotaçãoReal = 4.80
    return money * cotaçãoReal
}

let reais = dolarParaReal(Number(prompt('quantos dolar ce tem?')));
console.log(reais);

//3.
function areaPerimetro(ph, pl) {
    let area = ph * pl;
    let peri = (ph * 2) + (pl * 2);
    alert(`A sala tem ${peri} cm de perimetro e ${area} m² de area`);
}

let baseAltura = areaPerimetro(6, 8);

let linguagemBraba = ['js', 'python', 'c#'];
linguagemBraba.pop();
linguagemBraba.push('Java', 'c++')
console.log(linguagemBraba[1]);
