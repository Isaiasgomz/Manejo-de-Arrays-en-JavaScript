// el metodo flat sirve para aplanar los arrays que hay dentron de un array, y poner todos los elementos al mismo nivel sin estar encapsulados


const matriz = [
    [1,2,3],
    [4,5,6],
    [1,2,3]
]

other =[]
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        other.push(element)
    }
}
console.log(other)

// mwthod flat

let method = matriz.flat()
console.log(method)
