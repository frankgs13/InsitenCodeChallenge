import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from '../config/config';
import { CompanyStatus } from '../models/companyStatus.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyStatusService {
  public Companies: CompanyStatus[] = [];
  private EndPoint: string = `${Config.APIEndPoint}/companyStatus`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<CompanyStatus[]> {
    return this.http.get<CompanyStatus[]>(this.EndPoint);
  }

  get(Id: number): Observable<CompanyStatus> {
    return this.http.get<CompanyStatus>(`${this.EndPoint}/${Id}`);
  }

}