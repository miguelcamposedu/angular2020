import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonResponse } from '../interfaces/person-response.interface';

const API_BASE_URL = 'https://api.themoviedb.org/3/person';
const API_KEY = '433d2c486572afb242c6fe7c1ddc6771';
const USER_LANG = 'es-ES';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public getPopular(): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(`${API_BASE_URL}/popular?api_key=${API_KEY}&language=${USER_LANG}&page=1'`);
  }
}
