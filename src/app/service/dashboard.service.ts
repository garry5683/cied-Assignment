import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl:string='https://assignment.leadtracker.cied.dev/v1'

  constructor(      private http: HttpClient    ) { }


userDtls(){
  return this.http.get(`${this.apiUrl}/accounts/user/85NPW/`);
}
grapgDtls(params){
  return this.http.get(`${this.apiUrl}/leads/dashboard/graph/`,{params});
}
probabilityDtls(params){
  return this.http.get(`${this.apiUrl}/leads/probability/analysis/`,{params});
}
activeLeadDtls(params){
  return this.http.get(`${this.apiUrl}/leads/stage/`,{params});
}
LeadList(params){
  return this.http.get(`${this.apiUrl}/leads/?limit=10&offset=0&search=&ordering=-probability&stage_type=` + params['stage_type']);
}
}
