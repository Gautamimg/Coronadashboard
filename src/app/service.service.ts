import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        'b84fe28636msh599fd7625712ab4p16e54djsn3ff298fcb21b'
      )
      .set(
        'X-RapidAPI-Host',
        'corona-virus-world-and-india-data.p.rapidapi.com'
      ),
  };
  Coronadata_api() {
    return this.http.get(
      'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
      this.httpOptions
    );
  }
}
