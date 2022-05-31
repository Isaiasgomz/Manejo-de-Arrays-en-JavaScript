let nums = [1,2,3,4]

let sumador = 0
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    sumador =  sumador + element 
}
console.log('for',sumador)

reducir = nums.reduce((item, contador) => item + contador,0)
console.log('reduce',reducir)