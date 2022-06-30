/*for (let i = 0; i <= 10; i++){
    for (let g = 0; g <= 10; g++) {
      console.log(`${i} x ${g} = ${i*g}`)
    }
    console.log(`---------------------`)
}*/

let i = 1
let g = 0

while(i <= 10){
    
    while(g <= 10) {
      console.log(`${i} x ${g} = ${i*g}`)
      g++
    }

    console.log(`--------------------`)

    g = 0
    i++
}

let mutiplicacao = (valor1, valor2) => {
  return valor1 * valor2
}

