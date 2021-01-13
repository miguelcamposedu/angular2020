import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Incidencia } from 'src/app/models/incidencia.model';
import { IncidenciasService } from 'src/app/services/incidencias.service';

@Component({
  selector: 'app-incidencias-listado',
  templateUrl: './incidencias-listado.component.html',
  styleUrls: ['./incidencias-listado.component.css']
})
export class IncidenciasListadoComponent implements OnInit {
  listadoIncidencias: Incidencia[];
  displayedColumns: string[] = ['id', 'title', 'description', 'priority', 'created'];
  dataSource = new MatTableDataSource();
  
  constructor(private incidenciasService: IncidenciasService) { }

  ngOnInit(): void {
    this.incidenciasService.getIncidencias().subscribe(resp => {
      this.listadoIncidencias = resp.map(e => {
        return {
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        } as Incidencia;
      });
      this.dataSource.data = this.listadoIncidencias;
    });
  }

}
