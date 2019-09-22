import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from '../components/companies/companies.component';
import { CompanyKeyContactsComponent } from '../components/company-key-contacts/company-key-contacts.component';

const APP_ROUTES: Routes = [
    { path: '', component: CompaniesComponent }, // /#/
    { path: 'companyKeyContacts', component: CompanyKeyContactsComponent }, // /#/companyKeyContacts
    { path: '**', pathMatch: 'full', redirectTo: '' }, // /#/notfound
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true })
