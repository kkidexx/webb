import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagpService {

  constructor(private http: HttpClient) {}

  private API_Pelis = 'https://jritsqmet.github.io/web-api/peliculas3.json';

  
  getPelis(): Observable<any> {
    return this.http.get(this.API_Pelis);
  }
}
