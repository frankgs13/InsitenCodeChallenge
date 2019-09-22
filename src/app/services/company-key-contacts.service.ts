import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from '../config/config';
import { CompanyKeyContact } from '../models/companyKeyContact.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyKeyContactsService {
  public Companies: CompanyKeyContact[] = [];
  private EndPoint: string = `${Config.APIEndPoint}/companyKeyContacts`;

  constructor(private http: HttpClient) { }

  getAll(companyId: number): Observable<CompanyKeyContact[]> {
    return this.http.get<CompanyKeyContact[]>(`${this.EndPoint}/GetByCompanyId/${companyId}`);
  }

  get(Id: number): Observable<CompanyKeyContact> {
    return this.http.get<CompanyKeyContact>(`${this.EndPoint}/${Id}`);
  }

  save(data: CompanyKeyContact): Observable<CompanyKeyContact> {
    return this.http.post<CompanyKeyContact>(`${this.EndPoint}`, data);
  }

  update(data: CompanyKeyContact): Observable<CompanyKeyContact> {
    return this.http.put<CompanyKeyContact>(`${this.EndPoint}`, data);
  }

  detele(Id: number): Observable<CompanyKeyContact> {
    return this.http.delete<CompanyKeyContact>(`${this.EndPoint}/${Id}`);
  }

}

