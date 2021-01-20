import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router'; 
import firebase from 'firebase/app';
import { User } from '../models/user.interface';

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
      return this.afAuth.signInWithPopup(provider).then(result => {
        console.log(result.user);
        const {email = "", displayName: name = "", photoURL: foto = "", uid = "" } = result.user || {};

        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
        const userData: User = {
          email: email,
          displayName: name,
          photoURL: foto
        }
        userRef.set(userData, {merge: true });

        localStorage.setItem('uid', uid);
        localStorage.setItem('email', email);
        localStorage.setItem('displayName', name);
        localStorage.setItem('photoURL', foto);

        this.router.navigate(['incidencias']);

      }).catch((error) => {
        window.alert(error)
      });
    }
}
