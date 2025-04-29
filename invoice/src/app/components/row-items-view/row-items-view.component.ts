import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'tr[app-row-items-view]',
  templateUrl: './row-items-view.component.html',
  styleUrl: './row-items-view.component.css'
})
export class RowItemsViewComponent {
  @Input() item!:Item;
  @Output() removeItem = new EventEmitter<number>();
  onRemove = (id:number) => {
    this.removeItem.emit(id);
  }
}
