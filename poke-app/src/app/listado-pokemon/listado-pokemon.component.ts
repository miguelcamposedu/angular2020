import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css']
})
export class ListadoPokemonComponent implements OnInit {
  displayedColumns: string[] = ['name', 'link'];
  listadoPokemon = new MatTableDataSource();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(resp => {
      this.listadoPokemon.data = resp.results;
    });
  }

}
