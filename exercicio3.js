let operacao = prompt("Digite uma operação, 1-soma, 2-subitração, 3-mutiplicação, 4-divisão")
let num1 = Number(prompt("Digite o primeiro valor da operação: "))
let num2 = Number(prompt("Digite o segundo valor da operação:" ))

//operacao está entre 1, 2, 3 e 4
//operacao = 4

// == igualdade
// && E
// || OU

// + Maior
// - Menor
// / Maior e Igual
// % Maior e Igual

//(operacao == 1) && (operacao 4)
//    FALSO       &&     FALSO
//               FALSO

if((operacao >= 1) && (operacao >= 4)){
// o que tiver dentro
}

let Num1 = Number(prompt("Digite o primeiro valor da operação: "))
let Num2 = Number(prompt("DigiCte o Segundo valor da operação: "))


// Operação Soma
if(operacao == 1){
    alert(`O total  é: ${num1 + num2}`)
}

    // Operação Subtração
      if(operacao == 2){
        alert(`O total é: ${num1 - num2}`)
     }

        // Operação Mutiplicação
            if(operacao == 3){
             alert(`O total é: ${num1 * num2}`)
            }

        // Operação Divisão
            if(operacao == 4){
               alert(`o total é: ${num1 / num2}`)
            }

alert(`Digite um valor entre 1 e 4!`)

switch (operacao) {
    case '1':
        alert(`O total  é: ${num1 + num2}`)
        break;

    default:
        break;
}
 

    