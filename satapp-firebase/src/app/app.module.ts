import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from 'src/environments/environment';
import { IncidenciasService } from './services/incidencias.service';
import { IncidenciasListadoComponent } from './components/incidencias-listado/incidencias-listado.component';
import {MatTableModule} from '@angular/material/table';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthService } from './services/auth.service';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { AddIncidenciaDialogComponent } from './components/add-incidencia-dialog/add-incidencia-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidenciasListadoComponent,
    AuthLoginComponent,
    AddIncidenciaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    AddIncidenciaDialogComponent
  ],
  providers: [IncidenciasService, AuthService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
