import { Component, Input } from '@angular/core';
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  @Input() client!:Client;

}
