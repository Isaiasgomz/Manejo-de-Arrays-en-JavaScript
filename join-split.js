// El metodo join nos va permitir convertir un array en un string, el parametro que se pone en el metodo es correpondiente al string o espacio por el que van a ir separados cada uno de los elementos que van a terminar adjuntados en un string final separados por el parametro que se dio en el metodo

let elements = ['fire', 'air', 'water']

let stringFinal = ' '
let separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    stringFinal = stringFinal + element +separator    
}
console.log(stringFinal)

let  modification = elements.join('--')
console.log('metohd',modification)




// ahora bien el metodo split convierte un str o cadena de str en un array a este metodo se le proporciona como argumento la regla por la cual van a estar separados y convertirse en un elemento del array 





const title = 'Curso de Manupulacion de Arrays y Objetos en JavaScript'

let urlFinaly = title.split(' ').join('-').toLowerCase()
console.log(urlFinaly)