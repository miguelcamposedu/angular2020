import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddIncidenciaDialogComponent
  ],
  providers: [IncidenciasService, AuthService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
