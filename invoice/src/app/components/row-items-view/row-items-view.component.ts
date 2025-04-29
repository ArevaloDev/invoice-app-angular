import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'tr[app-row-items-view]',
  templateUrl: './row-items-view.component.html',
  styleUrl: './row-items-view.component.css'
})
export class RowItemsViewComponent {
  @Input() item!:Item;
}
