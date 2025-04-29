import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceViewComponent } from './components/invoice-view/invoice-view.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { CompanyViewComponent } from './components/company-view/company-view.component';
import { ListItemsViewComponent } from './components/list-items-view/list-items-view.component';
import { RowItemsViewComponent } from './components/row-items-view/row-items-view.component';
import { TotalComponent } from './components/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsViewComponent,
    RowItemsViewComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
