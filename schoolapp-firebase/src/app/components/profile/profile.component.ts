import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
var bcrypt = require('bcryptjs');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  strongPassword;

  constructor(private afStore: AngularFirestore) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl(''),
    });
  }

  get password() {
    return this.form.get('password').value;
  }

  onPasswordStrengthChanged(strength) {
    this.strongPassword = strength;
    console.log('====================================');
    console.log('onPasswordStrengthChanged', strength);
    console.log('====================================');
  }

  savePassword() {
    if(this.strongPassword < 3) {
      alert('Contraseña no segura');
    } else {
      // Obtener el UID del usuario logueado
      const uid = localStorage.getItem('uid');
      const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${uid}`);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.form.get('password').value, salt, function(err, hash) {
          const userData: User = {
            password: hash
          };
          userRef.set(userData, {
            merge: true
          });
        });
    });


     
    }
  }

  ifSafePassword() {
    return this.strongPassword >= 3;
  }

}
