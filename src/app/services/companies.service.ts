import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from '../config/config';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  public Companies: Company[] = [];
  private EndPoint: string = `${Config.APIEndPoint}/companies`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.EndPoint);
  }

  get(Id: number): Observable<Company> {
    return this.http.get<Company>(`${this.EndPoint}/${Id}`);
  }

  save(data: Company): Observable<Company> {
    return this.http.post<Company>(`${this.EndPoint}`, data);
  }

  update(data: Company): Observable<Company> {
    return this.http.put<Company>(`${this.EndPoint}`, data);
  }

  detele(Id: number): Observable<Company> {
    return this.http.delete<Company>(`${this.EndPoint}/${Id}`);
  }

}

