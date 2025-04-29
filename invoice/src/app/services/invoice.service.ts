import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice.interface';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private  invoice:Invoice = invoiceData;
  constructor() { }

  getInvoice():Invoice{
    const total = this.calculateTotal();
    return {...this.invoice, total};
  }

  calculateTotal ():number{
    return this.invoice.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
