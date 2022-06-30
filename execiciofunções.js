let operacao = prompt("Digite uma operação, 1-soma, 2-subitração, 3-mutiplicação, 4-divisão")

if((operacao >= 1) && (operacao >= 4)){

let Num1 = Number(prompt("Digite o primeiro valor da operação: "))
let Num2 = Number(prompt("DigiCte o Segundo valor da operação: "))

let soma = (v1,v2)  =>  v1 + v2
let subtracao = (v1,v2)  =>  v1 - v2
let mutiplicacao = (v1,v2)  =>  v1 * v2
let divisao = (v1,v2)  =>  v1 / v2

switch (operacao) {
    case '1':
        alert(`O total  é: ${soma (num1, num2)}`)
        break;

        case '2':
        alert(`O total  é: ${subtracao (num1, num2)}`)
        break;
        
        case '3':
        alert(`O total  é: ${mutiplicacao (num1, num2)}`)
        break;

        case '4':
        alert(`O total  é: ${divisao (num1, num2)}`)
        break;

    default:
        break;
     }

}

while(i <= 10){
    
    while(g <= 10) {
      console.log(`${i} x ${g} = ${i*g}`)
      g++
    }
}

let mutiplicacao = (valor1, valor2) => {
  return valor1 * valor2
}