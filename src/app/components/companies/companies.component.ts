import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company.model';
import { CompanyStatus } from 'src/app/models/companyStatus.model';
import { CompanyStatusService } from 'src/app/services/company-status.service';

import { confirm } from 'devextreme/ui/dialog';
import notify from 'devextreme/ui/notify'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public company: Company;
  public companies: Company[];
  public companyStatus: CompanyStatus[];
  public popupCompany: boolean = false
  public isNew: boolean = false

  public columns = [
    {
      dataField: 'id',
      caption: '',
      cellTemplate: 'commandButtons',
      width: 100
    },
    {
      dataField: 'id',
      width: 50
    },
    {
      dataField: 'name',
    },
    {
      dataField: 'country',
      width: 90
    },
    {
      dataField: 'city',
      width: 100
    },
    {
      dataField: 'address',
    },
    {
      dataField: 'zipCode',
      width: 90
    },
    {
      dataField: 'idStatusNavigation.name',
      caption: 'Status',
      width: 130
    },
    {
      dataField: 'financialPerformance',
      caption: 'Performance',
      width: 115
    },
    {
      dataField: 'createdDate',
      dataType: 'date',
      format: 'dd/MM/yyyy'
    },
    {
      dataField: 'id',
      caption: 'Key Contacts',
      cellTemplate: 'keyContacts',
      width: 120
    },
  ];

  constructor(
    private router: Router,
    private companiesService: CompaniesService,
    private companyStatusService: CompanyStatusService
  ) { }

  ngOnInit() {
    this.loadCompanies();
    this.loadCompanyStatus();
  }

  loadCompanies(){
    this.companiesService.getAll().subscribe(response => {
      this.companies = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  loadCompanyStatus(){
    this.companyStatusService.getAll().subscribe(response => {
      this.companyStatus = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  initNew() {
    this.iniVar();
    this.isNew = true;
    this.popupCompany = true;
  }

  edit(data) {
    this.company = data;
    this.isNew = false;
    this.popupCompany = true;
  }
  
  iniVar() {
    this.company = {
      id: 0,
      name: '',
      country: '',
      city: '',
      address: '',
      zipCode: '',
      idStatus: 1,
      financialPerformance: 0
    };
  }

  companyKeyContacts(data: Company)
  {
    localStorage.removeItem("companyKeyContact");
    localStorage.setItem("companyKeyContact", JSON.stringify(data));
    this.router.navigate(['companyKeyContacts']);
  }

  delete(data){
    let result = confirm("<i>Are you sure?</i>", "Confirm changes");
    result.then((dialogResult) => {
      if (dialogResult){
        this.companiesService.detele(data.id).subscribe(response => {
          notify('The company was deleted', 'success', 3000);
          this.loadCompanies();
        }, responseError => {
          notify(`An unexpected error occurred: $ {responseError}`, 'error', 5000)
          console.error(responseError);
        });
      }
    });
  }

  save() {
    if (this.isNew) {
      this.companiesService.save(this.company).subscribe(response => {
        notify('The company was added', 'success', 3000)
        this.loadCompanies();
        this.popupCompany = false
      }, responseError => {
        notify(`An unexpected error occurred: $ {responseError}`, 'error', 5000)
        console.error(responseError);
      });
    } else {
      this.companiesService.update(this.company).subscribe(response => {
        notify('The company was updated', 'success', 3000)
        this.loadCompanies();
        this.popupCompany = false
      }, responseError => {
        notify(`An unexpected error occurred: $ {responseError}`, 'error', 5000)
        console.error(responseError);
      });
    }
  }

}
