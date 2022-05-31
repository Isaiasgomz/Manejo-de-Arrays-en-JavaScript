// el metodo slpice nos puede ayudar a mutar o hacer modificacion es al array orignal ya sea eliminando un elemento del mismo por su indice o  bien una lista de elemtenos o una parte entera de elemtos , asi mismo tambien se puede agrgar elemtnos por emdio del indeice de otro elemento del array.
// el metodo push sirve para mutar el array orginal a;adiendo un elemtno nuevo en la ultima posicion de este array


const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];


let search = products.findIndex(item => item.id === '🍔')
if( search !==  -1){
    myProducts.push(products[search])
    products.splice(search, 1)
}


console.log("products", products);
console.log("myProducts", myProducts);

const updates = {
    id : '🥞', 
    changes :{
        200 : 'price',
        sabor : 'delicius'
    }
}


let searchV2 = products.findIndex(item => item.id === '🥞')


products[searchV2] = {
    ...products[searchV2],
    ...updates.changes
}

console.log(products)
