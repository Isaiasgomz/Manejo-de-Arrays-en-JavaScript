let nums = [1,2,1,3]

const contador = nums.reduce((contador,item ) => {
  if(!contador[item]){
    contador[item] = 1
  }else {
    contador[item] = contador[item] + 1
  }
  return contador
}, {})

console.log(contador)

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];


  // aqui mpriemro hacemos un array de los value de las keys level con un metodo map y despues este mismo array de value lo pasamos como entrada para un metodo reduce a fin de hacer un objeto final con el numero de las propiedades que se encontraron como un histograma de cuantas veces apracio cierto elemtento en el array,al final el reduce lo devuelve en un objeto 
const busqueda = 
data
.map(item => item.level)
.reduce((contador,item ) => {
  if(!contador[item]){
    contador[item] = 1
  }else {
    contador[item] = contador[item] + 1
  }
  return contador
}, {})

console.log(busqueda)