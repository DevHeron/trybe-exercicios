
//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1// for (index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }

// let somatorio = 0;


// for (index = 0; index < numbers.length; index += 1){
//     somatorio += numbers[index];
// }

// let mediaAritimetica = somatorio / numbers.length;

// if (mediaAritimetica > 20){
//     console.log('O valor da média é maior que 20');
// } else if (mediaAritimetica <= 20){
//     console.log('O valor da média é menor ou igual a 20');
// }

// console.log(`O somatório é: ${somatorio}
// e a média aritimética é: ${mediaAritimetica}`);

// let maiorNumero = [numbers[0]];

// for (let index = 1; index < numbers.length; index += 1){
//     if (numbers[index] > maiorNumero){
//         maiorNumero = numbers[index];
//     }
// }
// console.log(maiorNumero);

// let contagemImpares = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     if (numbers[index] % 2 != 0) {
//         contagemImpares += 1;
//     }
// }
// console.log(contagemImpares);

//DESAFIO FATORIAL:

// let chosenNumber = 10;
// let result = chosenNumber;

// for (let index = chosenNumber; index > 1; index -= 1){
//     result *= index;
// }
// console.log(`O fatorial de ${chosenNumber}, (${chosenNumber}!), é ${result}`);

//DESAFIO INVERTER PALAVRA:

//com uso de split, reverse e join:
// let word = 'tryber';

// let reverseWord = word.split('').reverse().join();
// console.log(reverseWord);


//sem uso de split, reverse e join:

let word = 'tryber';
let reverseWord = '';

for (index = word.length -1; index >= 0; index -= 1){
    reverseWord += word[index];
};

console.log(reverseWord);