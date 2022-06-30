let numero = prompt("Digite um número para saber se é par ou impar")

// numero % 2 = 0 É par ( == 0)
// numero % 2 > 0 É Impar ( > 0)

// let resutado  = numero % 2

/*
if((numero % 2) == 0){
    alert(`O numero ${numero} é par`)
}else{
    alert(`O numero ${numero} é Impar`)
}
*/

//IF TERNÁRIO
//                                |    condiçao    | ?    ação true : ação false
 alert(`o número ${numero} é ${  ((numero % 2) == 0) ?    'par'    :      'impar' }`)