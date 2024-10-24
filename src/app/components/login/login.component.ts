import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  servicio: any;

  constructor(private loginService: LoginService, private router: Router) {}

  login(formulario: any) {
    this.loginService.postUser(formulario.value).subscribe((response: { accessToken: any; }) => {
      if (response.accessToken) {
        localStorage.setItem('login', 'true');
        this.router.navigate(['/pagina']);
      }
    }, error => {
      console.error('Login failed', error);
    });
  }
}
