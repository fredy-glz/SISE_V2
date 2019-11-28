import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './General/home/home.component';
import {RegistroComponent} from './General/registro/registro.component';
import {CuestionarioPsicologiaComponent} from './Psicologia/cuestionario-psicologia/cuestionario-psicologia.component';
import {LoginComponent} from './General/login/login.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/registro',
    component: RegistroComponent
  },
  {
    path: 'psicologia/cuestionario',
    component: CuestionarioPsicologiaComponent
  },
  {
    path: 'home/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
