import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient) { }

  private API_USUARIOS = 'http://localhost:3000/login';
  private API_REGISTRO = 'http://localhost:3000/register';

  postUser(usuario: any): Observable<any> {
    return this.http.post(this.API_USUARIOS, usuario);
  }

  registtroUser(usuario: any): Observable<any> {
    return this.http.post(this.API_REGISTRO, usuario);
  }


}
