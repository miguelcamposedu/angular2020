import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router'; 
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore,   // BASE DE DATOS EN Firestore
    public afAuth: AngularFireAuth, // SERVICIO DE AUTH en Firebase
    public router: Router) {  // Enrutado, redirigir al usuario a otra URL

    }

    googleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.afAuth.signInWithPopup(provider).then((result) => {
        console.log(result);
        const perfilUsuarioLogueado = result.additionalUserInfo.profile;
        const {email = "", family_name: apellidos = "", given_name: nombre = "", picture: foto = ""} = perfilUsuarioLogueado || {};

        this.afs.collection

      }).catch((error) => {
        window.alert(error)
      });
    }
}
