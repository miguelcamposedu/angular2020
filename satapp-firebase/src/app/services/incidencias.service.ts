import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Incidencia, IncidenciaData } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private firestore: AngularFirestore) { }

  getIncidencias() {
    return this.firestore.collection('incidencias').snapshotChanges();
  }

  add(incidencia: IncidenciaData) {
    this.firestore.collection('incidencias').add(incidencia);
  }

  update(incidencia: Incidencia) {
    const incidenciaRef: AngularFirestoreDocument<any> = this.firestore.doc(`incidencias/${incidencia.id}`);
    incidenciaRef.set(incidencia.data, {merge: true });
  }
}
