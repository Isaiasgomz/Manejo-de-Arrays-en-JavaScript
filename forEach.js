letters = ['a', 'b ', 'c',]

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element)
    
}
//  el metodo forEach nos puede ayudar a obtener cada uno de los elemtenos de una array, en si por dentro en su funcionamientos hace un ciclo for para poder mostrar todos los elementos y devolverlos en un nuevo array sin modificar el array principal
letters.forEach( item => console.log( 'forEach', item))