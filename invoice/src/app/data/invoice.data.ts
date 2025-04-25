import { Invoice } from "../interfaces/invoice.interface";

export const invoiceData:Invoice = {
  id:1,
  name: 'Componentes de PC',
  client: {
    name: 'Eduardo',
    lastName: 'Bonilla',
    address: {
      country: 'SV',
      city: 'Mejicanos',
      street: 'Col. Fortuna',
      number: '20'
    }
  },

  company:{
    name: 'New brand',
    fiscalNumber: 1234521,
  },
  items:[
    {
      id: 1,
      product: 'CPU Intel i9',
      price: 599,
      quantity: 1
    },
    {
      id: 2,
      product: 'Monitor 34 pulgadas',
      price: 499,
      quantity: 2
    },
    {
      id: 3,
      product: 'Teclado',
      price: 50,
      quantity: 1
    },

  ]
}
