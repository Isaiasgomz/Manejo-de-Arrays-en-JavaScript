// el metodo concat nos va permitir crear un nuevo array uniendo el arrray al que se le aplico el metodo y tambien el array que se paso por parametro, no va a modifcar los array originales, mas bien devuelve un nuevo array 

let numeros1 = [1,1,2,2]
let numeros2 = [3,3,4,4]

let newArray = [... numeros1] 
for (let index = 0; index < numeros2.length; index++) {
    const element = numeros2[index];
    newArray.push(element)
}

console.log('loop for',newArray)


// method concat

let other = numeros1.concat(numeros2)
console.log('method concat',other)






//  a partirn de 2 arrays crear uno vnuevo

let otherArray = [... numeros1,... numeros2] 
console.log('string operator',otherArray)





// aniadir un nuevo array a un array existente, esto va a modificar el array al que se le hace push

numeros1.push(...numeros2)
console.log('push',numeros1)





// con el string operator podemos unir str a un array NOTA: el str se desintegra letra por letra para convertirse en elementos del array

 let unirLetras = [...numeros1,...'ramdom']
 console.log('string operator and letters',unirLetras)

 




//  otra forma de unir un str a un array, crendo un nuevo array y mentiendo a la palbra entera com un solo elemento dentro del array

 let otherUnirLetras = [...numeros1,'ramdom']
 console.log(otherUnirLetras)