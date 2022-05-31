

// el motodo some hace un recoriido dentro del array para buscar si hay al menos un elemento que cumpla con la condicicion dada dentro del array y si por lo menos hay un elemento que cumplio con la condicion este metodo va a retornar un boolean ya sea false o true


let array = [1,3,3,5,6]
let isPar = false
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element % 2 === 0){
        isPar = true
        break
    }
}
console.log('ispar',isPar)






let searchPar = array.some(item => item % 2 === 0)
console.log('some',searchPar)

// en esta caso utilizamos el metodo some para hacer una busqueda en el array para saber si por lo menos dentreo del array hay un numero que sea par y si es asi, el metodo va a retornar true




const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: false,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: false,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

//   es este caso ahora utilizamos el metodo para buscar dentro de  array de objetos y  buscar dentro de sus item delivered si por lo menos hay alguno que tenga como value true y si hay por lo menos 1 enotces el metodo va a retornar true


  let ortherSearch =  orders.some(item => item.delivered)

  console.log('isdelivered..', ortherSearch)












  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  let isOverLap = (newDate) => {
      return dates.some(
          {
           return :areIntervalsOverlapping(
               {start :dates.startDate, end : dates.endDate},
               {star: newDate.startDate, end : newDate.endDate}
               )   
            }
          )
  }

  console.log(isOverLap(newAppointment));