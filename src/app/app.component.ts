import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagpComponent } from "./components/pagp/pagp.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagpComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webb';
  isLoggedIn(): boolean {
    return !!localStorage.getItem('login');
  }
}
