import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:5038';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    var formData =  new FormData();
    formData.append('file', file);
     
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }


  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
