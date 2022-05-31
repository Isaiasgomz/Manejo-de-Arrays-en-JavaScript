let words = ['bicicleta', 'automovil','ferrocarril','avion','barco']
let mayores= []
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length > 7){
        mayores.push(element)
    }   
}
console.log('for', mayores)

//  en este caso estamos aplicanod el metodo filter a un aray para buscar y retornar solo los elemetos que cumplan con la condadcion dictada en el metodo en este caso es que solo va a retornar las palabras cuya longitud de caracteres es mayor a 7, y devuelve un array nuevo con los elemetos que hayan cumplido con la condicion

let filtrado= words.filter( (item) => item.length > 7)
console.log('filter',filtrado)






const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 360,
        delivered: false,
      },
  ]

  //  ahora tenemos un objetos al que le aplicamos el metodo filter y ademas ahora vamos a filtrar a los elemttos que cumplan con las 2 consiciones propuestas dentro del metodo que en este caso es que item.delivered sea true y ademas que item.total sea mayor a 100, el metodo solo va a retornar en un nuevo array a los objetos que hayan cumplido con las 2 condicionales

 let  value = orders.filter((item) => item.delivered && item.total > 150)

 console.log(value)




// en este caso aplicamos el metodo filter para realizar un buscador sencillo en donde a una funcion anonima les passamos un query como parametro para que dentro de esta funcion anonima ejecutemos un metodo filter donde en cada item vamos a ir al la propiedad ite.costmerName y alli buscaremos aplicandole al item.costumeName el metodo inclues para que a al value los comparemos con el query y si el query coincide va a retornar en un nuevo array a los objetos que hayan cumplido con la condicion dada por el filter( ya sea una lettra, una oracion o en si una palabre entera)


let search = (query) => {
    return orders.filter(item =>{
            return item.customerName.includes(query)
        })
}
console.log(search('Nico'))
