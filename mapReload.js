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
  ];

//   INPORTANT el metodo map nos puede ayudar a para adjuntar el o los value de todas las keys o propiedades de un objeto  y retornalas en un nuevo array sin modificar el object raiz
  
let value = orders.map(item => item.customerName )
  console.log(value)
  
  let addElement = orders.map((item) => {
      return {
          ... item,
          tax: 0.19
        }
    }
    )
    console.log(orders)
    console.log(addElement)
