import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Incidencia, IncidenciaData } from 'src/app/models/incidencia.model';
import { IncidenciasService } from 'src/app/services/incidencias.service';

export interface AddIncidenciaDialogData {
  title: string;
  actionEdit: boolean;
  incidencia?: Incidencia;
}

@Component({
  selector: 'app-add-incidencia-dialog',
  templateUrl: './add-incidencia-dialog.component.html',
  styleUrls: ['./add-incidencia-dialog.component.css']
})
export class AddIncidenciaDialogComponent implements OnInit {
  title: string;
  incidenciaForm: FormGroup;
  actionEdit: boolean;
  incidencia: Incidencia;

  constructor(
    private incidenciasService: IncidenciasService,
    public dialogRef: MatDialogRef<AddIncidenciaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddIncidenciaDialogData
  ) { }

  ngOnInit(): void {
    this.doOnInit();
  }

  doOnInit() {
    this.title = this.data.title;
    this.actionEdit = this.data.actionEdit;
    this.incidencia = this.data.incidencia;

    if(this.actionEdit) {
      this.incidenciaForm = new FormGroup({
        title: new FormControl(this.incidencia.data.title),
        description: new FormControl(this.incidencia.data.description),
        priority: new FormControl(this.incidencia.data.priority)
      });
    } else {
      this.incidenciaForm = new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
        priority: new FormControl('')
      });
    }
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    const incidenciaData: IncidenciaData = {
      title: this.incidenciaForm.controls.title.value,
      description: this.incidenciaForm.controls.description.value,
      priority: this.incidenciaForm.controls.priority.value,
      created: new Date()
    };

    if(this.incidenciaForm.valid) {
      if(this.actionEdit) {
        const incidencia: Incidencia = {
          id: this.incidencia.id,
          data: incidenciaData
        }
        this.incidenciasService.update(incidencia);
        this.dialogRef.close();
      } else {
        this.incidenciasService.add(incidenciaData);
        this.dialogRef.close();
      }
    }
  }

}
