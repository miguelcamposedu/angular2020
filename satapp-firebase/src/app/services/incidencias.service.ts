import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IncidenciaData } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private firestore: AngularFirestore) { }

  getIncidencias() {
    return this.firestore.collection('incidencias').snapshotChanges();
  }

  save(incidencia: IncidenciaData, id: string) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`incidencias/`);
        const incidenciaData: IncidenciaData = {
          title: '',
          description: '',
          priority: 3,
        }
        userRef.set(incidenciaData, {merge: true });
  }
}
