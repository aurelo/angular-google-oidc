import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private http: HttpClient) { }

  listFiles(): Observable<any>{
    return this.http.get<Observable<any>>(`https://www.googleapis.com/drive/v3/files?key=AIzaSyDfDRpPMMfsfLGpr2VSCtrXF4JWAcmdgZ4`);
  }

  uploadFile(): Observable<any> {

    let fileContent = 'Hello World'; // As a sample, upload a text file.
    let file = new Blob([fileContent], { type: 'text/plain' });
    let metadata = {
      'name': 'sample-file-via-angular', // Filename at Google Drive
      'mimeType': 'text/plain' // mimeType at Google Drive
      //'parents': ['angular-gdrive'], // Folder ID at Google Drive which is optional
    };

    let form = new FormData();
	  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
	  form.append('file', file);

    console.log("file form to upload", form);
  
    // return this.http.post<Observable<any>>(`https://www.googleapis.com/drive/v3/files?uploadType=media`, form);
    return this.http.post<Observable<any>>(`https://www.googleapis.com/drive/v3/files?key=AIzaSyDfDRpPMMfsfLGpr2VSCtrXF4JWAcmdgZ4&uploadType=multipart`, form);
  }

uploadFile1(): Observable<any> {

  let fileContent = 'sample text'; // As a sample, upload a text file.
  let file = new Blob([fileContent], {type: 'text/plain'});
  let metadata = {
      'name': 'sampleName', // Filename at Google Drive
      'mimeType': 'text/plain', // mimeType at Google Drive
      //'parents': ['### folder ID ###'], // Folder ID at Google Drive
  };

  let form = new FormData();
 // form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
  form.append('file', file);

  // return this.http.post<Observable<any>>(`https://www.googleapis.com/drive/v3/files?uploadType=multipart`, form);
  return this.http.post<Observable<any>>(`https://www.googleapis.com/drive/v3/files?key=AIzaSyDfDRpPMMfsfLGpr2VSCtrXF4JWAcmdgZ4&uploadType=simple`, form);
}

}
