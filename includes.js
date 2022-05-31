// el metodo includes es aplicable tanto para arrays y tambien para strings, este metodo hace la busqueda de un elemento o string pasado como parametro en el metodo que retorna un boolean despues de recorrer  y en caso de que lo haya encontrado va retornar true o caso contrario false

let mascotas = ['dog','cat', 'bird']

elementInArray = false
for (let index = 0; index < mascotas.length; index++) {
    const element = mascotas[index];
    if( element === 'bird'){
        elementInArray = true
        break
    }
}
console.log(elementInArray)

let search = mascotas.includes('bird')
console.log('metohd',search)