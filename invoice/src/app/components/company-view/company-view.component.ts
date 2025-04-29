import { Component, Input } from '@angular/core';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent {

  @Input() company!:Company;
}
