import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-list-items-view',
  templateUrl: './list-items-view.component.html',
  styleUrl: './list-items-view.component.css'
})
export class ListItemsViewComponent {

  @Input() items:Item[] = [];
  @Output() removeItem = new EventEmitter<number>();

  onRemove = (id:number) => {
    this.removeItem.emit(id);
  }
}
