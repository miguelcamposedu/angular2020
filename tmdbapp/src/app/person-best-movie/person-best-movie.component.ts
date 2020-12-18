import { Component, Input, OnInit } from '@angular/core';
import { KnownFor, Person } from '../interfaces/person-response.interface';

@Component({
  selector: 'app-person-best-movie',
  templateUrl: './person-best-movie.component.html',
  styleUrls: ['./person-best-movie.component.css']
})
export class PersonBestMovieComponent implements OnInit {
  @Input() personInput: Person;
  movieBestRated: KnownFor;
  titulo = 'No hay título';

  constructor() { }

  ngOnInit(): void {
    // Destructuring
    // CASO 1: no tienes que entrar en el detalle de una película
    // const {adult = true, gender = undefined, id = undefined, known_for: _peliculas = []  } = this.personInput;

    // CASO 2: necesito acceder a la primera posición del array de películas
    const { known_for: _knownFor = [] } = this.personInput || {};

    _knownFor.forEach(pelicula => {
      const {original_title: _title = undefined, director: {name: _directorName = undefined, company: {name = undefined} ={}} ={}}  = pelicula as any || {};
      this.titulo = _title? _title : 'No hay título';
    });

    //TODO el recorrido con un bucle for/forEach
    // const {overview: _descripcionPrimeraPelicula = undefined, vote_average: _vote = 0 } = _peliculas[0] || {};
 
  }


}
