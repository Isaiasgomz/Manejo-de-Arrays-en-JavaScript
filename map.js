letters = ['a','b', 'c']

other = letters.map(item => item + '++')
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index]
//     other.push(element + '++')

// }
// el metod map puede ayudar a hacer modificacaciones a cada uno de los elementos del array, hace la modificacion que le indicquemos y adjunra estos nuevos elementos modifiacados en un nuevo array, no modifica el array orginal
console.log('map', other)