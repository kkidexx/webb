import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  nick: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onRegister() {
    if (this.password === this.confirmPassword) {
      const newUser = {
        email: this.email,
        password: this.password,
        nick: this.nick
      };

      this.loginService.registtroUser(newUser).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    } else {
      console.error('Passwords do not match');
    }
  }
}
