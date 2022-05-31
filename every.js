// el metodo every nos va a ayudar a verifcar si todo los elememtos del array cumplen con la condicion dada dentoro del metodo respondiendo true si todos cumplen con la condicion o bien si  por lo menos hay uno que no cumplio con la condicion el metodo va a retornar el boolean false  


let nums = [12,15,18,26,32,38,]

let verifircar = true
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if(element  >= 40 ){
        verifircar = false
    }
    
}
console.log(verifircar)

let search = nums.every(item => item <= 40)
console.log( 'method every',search)

// en este preciso caso estos verificando si dentro deel array todo los numeros o elemtnos son menores a  40 y como todos los elemtnos del array son menores el metodo retorno una respuesta en boolean true