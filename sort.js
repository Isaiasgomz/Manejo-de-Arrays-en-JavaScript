// el metodo sort nos va a permitir un array u onjetos en cieto orden ya sea los numero de mayoa menor o las letras en orden alfabetico 



const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];
let ordenarnums = numbers.sort( (a, b) => b - a)
console.log(ordenarnums)

const words = [
    "aéservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

let ordenarwords = words.sort()
console.log(ordenarwords)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

ordenaritems = orders.sort((a ,b ) => b.total - a.total)
console.log(ordenaritems)

// NOTA:Nazareno Aznar Altamiranda

// Hace 7 meses

// 16
// LeetCode y CodeWars son dos páginas donde encontrar ejercicios sobre arrays para que vayan practicando y profesionalizando su habilidad 😉 si conocen más paginas o lugares para practicar, compartanlo =D

// Responder
// Diego Do Santos
// Diego Do Santos

// Hace 7 meses

// 1
// Actualmente estoy practicando en CodeWars y me viene sirviendo todos estos métodos.
// Recomiendo además: CodinGame, Coderbyte y edabit