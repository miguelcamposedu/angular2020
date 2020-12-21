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
    // ERROR >>>> this.titulo = this.personInput.known_for[0].original_title;
    const {known_for: _peliculas = []} = this.personInput || {};
    const {original_title = undefined} = _peliculas[0] || {};
    this.titulo = original_title? original_title: this.titulo;
  }


}
