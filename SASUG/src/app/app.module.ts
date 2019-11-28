import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './General/home/home.component';
import { HeaderComponent } from './General/header/header.component';
import { FooterComponent } from './General/footer/footer.component';
import { FormRegistroComponent } from './General/form-registro/form-registro.component';
import { RegistroComponent } from './General/registro/registro.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeNutricionComponent } from './Nutricion/home-nutricion/home-nutricion.component';
import { HomePsicologiaComponent } from './Psicologia/home-psicologia/home-psicologia.component';
import { CuestionarioPsicologiaComponent } from './Psicologia/cuestionario-psicologia/cuestionario-psicologia.component';
import { FormCuestionarioComponent } from './Psicologia/form-cuestionario/form-cuestionario.component';
import { LoginComponent } from './General/login/login.component';
import { FormLoginComponent } from './General/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormRegistroComponent,
    RegistroComponent,
    HomeNutricionComponent,
    HomePsicologiaComponent,
    CuestionarioPsicologiaComponent,
    FormCuestionarioComponent,
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
