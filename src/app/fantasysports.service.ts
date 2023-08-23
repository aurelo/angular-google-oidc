import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FantasysportsService {

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any>{
    return this.http.get<Observable<any>>(`https://fantasysports.yahooapis.com/fantasy/v2/league/`);
  }
}
