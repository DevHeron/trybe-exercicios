//exercício1: Exercício 1
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)

// let num1 = 2;
// let num2 = 5;

// const adicao = num1 + num2;
// const subtracao = num1 - num2;
// const multiplicacao = num1 * num2;
// const divisao = num1 / num2;
// const modulo = num1 % num2;

// console.log(subtracao); // só tocar isso aqui!


// //exercício2: Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
// let num1 = 2;
// let num2 = 5;

// num1 > num2 ? console.log('numero 1 é maior') : console.log('numero 2 é maior');

//exercício3: Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

// let num1 = 2;
// let num2 = 5;
// let num3 = 9;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(num2)
// } else if (num3 > num1 && num3 > num2){
//     console.log(num3)
// }

//exercício4: 🚀 Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// let num1 = 60;
// let num2 = 60;
// let num3 = 60;

// somaDosValores = num1 + num2 + num3;

// if (somaDosValores === 180 && somaDosValores > 0){
//     console.log('Os valores podem ser de angulos de um triângulo')
// } else {
//     console.log('Os valores NÃO podem ser de angulos de um triângulo');
// }

//exercício5: 

// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Atenção ⚠️: não sabe o que é switch/case? Reveja a aula pois pode ter passado despercebido ☺️. Caso queira se aventurar na aprendizagem do switch/case através da documentação, tem um link muito bom te esperando na lição de Recursos Adicionais. Por fim, você terá mais oportunidades de sedimentar o conhecimento sobre a estrutura condicional switch/case ao longo da formação! Agora, só queremos dar visibilidade que existem outras ferramentas para fazer operações condicionais, ok?

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.


// let nomeDaPeca = 'PEAO';
// let resposta = '';

// switch (nomeDaPeca.toLowerCase()) {
//     case 'torre':
//     resposta += 'A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças. A torre captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária.';
//     break;
//     case 'cavalo':
//     resposta += 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.';
//     break;
//     case 'bispo':
//     resposta += 'Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';
//     break;
//     case 'rainha':
//     resposta += 'é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.';
//     break;
//     case 'rei':
//     resposta += 'move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance'
//     break;
//     case'peao':
//     resposta += 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';
//     break;
//     default:
//     console.log('Escolha uma peça válida');
// }

// console.log(resposta);




//exercício6:

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// isEven = false;

// if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
//     isEven = true;
// }

// console.log(isEven);


//exercício7:


let descINSS;
let descIR;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94){ //não precisava usar o &&, poderia reduzir código...
    descINSS = salarioBruto * 0.08;
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
    descINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
    descINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82){
    descINSS = 570.88;
}

let salarioBase = salarioBruto - descINSS;

if (salarioBase <= 1903.98){
    descIR = 0;
} else if (salarioBase <= 2826.65){
    descIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05){
    descIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68){
    descIR = (salarioBase * 0.225) - 630.13;
} else if (salarioBase > 4664.68){
    descIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - descIR;

console.log('salário: R$' + salarioLiquido);


