import { Component, Input } from '@angular/core';
import { Invoice } from '../../interfaces/invoice.interface';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {

  @Input() total:number | undefined = 0;
}
