import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';

const pokemonBaseUrl = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(pokemonBaseUrl);
  }

}
