import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GmailService {


  constructor(private http: HttpClient) { }


  listLabels(userId: string) {
    return this.http.get(`https://gmail.googleapis.com/gmail/v1/users/${userId}/labels`)
  }


  createLabel(userId: string, labelName: string) {
    let label = 
    {
      "name": labelName,
    }
    ;
    return this.http.post(`https://gmail.googleapis.com/gmail/v1/users/${userId}/labels`, JSON.stringify(label));
  }
}
