import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/services/incidencias.service';

@Component({
  selector: 'app-add-incidencia-dialog',
  templateUrl: './add-incidencia-dialog.component.html',
  styleUrls: ['./add-incidencia-dialog.component.css']
})
export class AddIncidenciaDialogComponent implements OnInit {

  constructor(private incidenciasService: IncidenciasService) { }

  ngOnInit(): void {
  }

  saveIncidencia() {
    this.incidenciasService.
  }

}
