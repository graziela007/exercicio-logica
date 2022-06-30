let a = 999
let b = 555
let c

c = a // a = 999 b = 555 c = 999
a = b // a = 555 b = 555 c = 999
b = c // a = 555 b = 999 c = 999

a = a + b
b = b + a

alert(`O valor de a ${a} o valor de b ${b}`)

