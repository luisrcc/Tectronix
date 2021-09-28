
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormularioComponent,
    ReportesComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatDatepickerModule, MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
