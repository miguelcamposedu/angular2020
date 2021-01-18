import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { IncidenciasListadoComponent } from './components/incidencias-listado/incidencias-listado.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthLoginComponent },
  { path: 'incidencias', component: IncidenciasListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
