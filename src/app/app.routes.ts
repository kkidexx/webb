import { Routes } from '@angular/router';
import { PagpComponent } from './components/pagp/pagp.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [

  { path: 'pagina', component: PagpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
];
