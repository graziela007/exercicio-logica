let numero = prompt("Digite um número para saber se é positivo ou negativo")

// numero >= 0

/*
if((numero >= 0)){
    alert(`O numero ${numero} é positivo`)
}else{
    alert(`O numero ${numero} é negativo`)
}
*/

//IF TERNÁRIO
//                                |    condiçao    | ?    ação true : ação false
alert(`o número ${numero} é ${  ((numero % 2) == 0) ?    'positivo'    :    'negativo' }`)

    switch (operacao) {
        case '1': 
           alert(`O total é: ${num1 + num2}`)
            break;
        case '2' :
            alert(`O total é: ${num1 - num2}`)
            break;
        case '3' :
           alert(`O total é: ${num1 * num2}`)
           break;
        case '4' :
           alert(`O total é: ${num1 / num2}`)
           break;
        default:
          alert(`Digite um valor entre 1 e 4!`)
          break;   
    }