import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../interfaces/invoice.interface';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{
  public invoice!:Invoice

  constructor(private invoiceServices:InvoiceService){}

  ngOnInit(): void {
    this,this.invoice = this.invoiceServices.getInvoice();
  }
}
