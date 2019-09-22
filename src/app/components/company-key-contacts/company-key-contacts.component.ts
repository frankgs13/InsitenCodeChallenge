import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { Company } from 'src/app/models/company.model';
import { CompanyKeyContact } from 'src/app/models/companyKeyContact.model';
import { CompanyKeyContactsService } from 'src/app/services/company-key-contacts.service';

import { confirm } from 'devextreme/ui/dialog';
import notify from 'devextreme/ui/notify'

@Component({
  selector: 'app-company-key-contacts',
  templateUrl: './company-key-contacts.component.html',
  styleUrls: ['./company-key-contacts.component.css']
})
export class CompanyKeyContactsComponent implements OnInit {

  public company: Company;
  public companyKeyContact: CompanyKeyContact;
  public companyKeyContacts: CompanyKeyContact[];
  public popup: boolean = false
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
      dataField: 'lastName',
    },
    {
      dataField: 'position',
    },
    {
      dataField: 'phone',
      width: 100
    },
    {
      dataField: 'email',
    },
    {
      dataField: 'createdDate',
      dataType: 'date',
      format: 'dd/MM/yyyy'
    }
  ];

  constructor(
    private router: Router,
    private companyKeyContactsService: CompanyKeyContactsService
  ) { }

  ngOnInit() {
    this.company = JSON.parse(localStorage.getItem('companyKeyContact'));
    this.loadCompanyKeyContacts();
  }

  loadCompanyKeyContacts(){
    this.companyKeyContactsService.getAll(this.company.id).subscribe(response => {
      this.companyKeyContacts = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  initNew() {
    this.iniVar();
    this.isNew = true;
    this.popup = true;
  }

  edit(data) {
    this.companyKeyContact = data;
    this.isNew = false;
    this.popup = true;
  }
  
  iniVar() {
    this.companyKeyContact = {
      id: 0,
      companyId: this.company.id,
      name: '',
      lastName: '',
      position: '',
      phone: '',
      email: ''
    };
  }

  delete(data){
    let result = confirm("<i>Are you sure?</i>", "Confirm changes");
    result.then((dialogResult) => {
      if (dialogResult){
        this.companyKeyContactsService.detele(data.id).subscribe(response => {
          notify('The key contact was deleted', 'success', 3000);
          this.loadCompanyKeyContacts();
        }, responseError => {
          notify(`An unexpected error occurred: $ {responseError}`, 'error', 5000)
          console.error(responseError);
        });
      }
    });
  }

  save() {
    if (this.isNew) {
      this.companyKeyContactsService.save(this.companyKeyContact).subscribe(response => {
        notify('The key contact was added', 'success', 3000)
        this.loadCompanyKeyContacts();
        this.popup = false
      }, responseError => {
        notify(`An unexpected error occurred: $ {responseError}`, 'error', 5000)
        console.error(responseError);
      });
    } else {
      this.companyKeyContactsService.update(this.companyKeyContact).subscribe(response => {
        notify('The key contact was updated', 'success', 3000)
        this.loadCompanyKeyContacts();
        this.popup = false
      }, responseError => {
        notify(`An unexpected error occurred: $ {responseError}`, 'error', 5000)
        console.error(responseError);
      });
    }
  }

}
