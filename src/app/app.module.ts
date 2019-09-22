import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './config/routers';

import { DxDataGridModule, DxButtonModule, DxPopupModule, DxScrollViewModule, DxTemplateModule, DxSelectBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesService } from './services/companies.service';
import { CompanyKeyContactsService } from './services/company-key-contacts.service';
import { CompanyStatusService } from './services/company-status.service';
import { CompanyKeyContactsComponent } from './components/company-key-contacts/company-key-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyKeyContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxScrollViewModule,
    DxTemplateModule,
    DxSelectBoxModule
  ],
  providers: [
    CompaniesService,
    CompanyKeyContactsService,
    CompanyStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
