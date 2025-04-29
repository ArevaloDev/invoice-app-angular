import { Component, Input } from '@angular/core';
import { Invoice } from '../../interfaces/invoice.interface';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.css'
})
export class InvoiceViewComponent {
  @Input() invoice!:Invoice;

}
