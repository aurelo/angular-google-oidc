import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeepService {

  constructor(private http: HttpClient) { }


  listNotes() {
    return this.http.get(`https://keep.googleapis.com/v1/notes`)
  }


  createNote(title: string) {
    let note = 
    {
      "title": title,
    }
    ;
    return this.http.post(`https://keep.googleapis.com/v1/notes`, JSON.stringify(note))
  }

}
