// el metodo find realiza un recorrido de todo el array para realizar la busqueda del elemento que se puso en la condicion del metodo, en caso de que encuentre al elemento  dentro del array el metodo retorna a ese elemento que haya ehco maetch con el elemento de la condicion pero en caso de que no encutre al elemento de la condicion va a retornar undefined
// [este metodo solo funciona dentro array]



let array = [12,25,305,14,12]

let search = undefined 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 35){
        search = element
        break
    } 
}
console.log(search)






// METODO FIND

let match = array.find(item => item === 35)
console.log('method',match)




const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  
let other = products.find(item => item.id === '🥞' )
console.log(other)


// exite otro metodo llamdo Find Index donde 

let searchIndex = products.findIndex(item => item.id === '🥞')
console.log(searchIndex)