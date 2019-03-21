import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonListApiResponse} from '../api/api.responses';
import {Observable} from 'rxjs';

@Injectable()
export class PokemonService {
  readonly baseUrl = `https://pokeapi.co/api/v2`;
  readonly endpoints = {
    get: {
      pokemon: () => `/pokemon`,
    },
  };

  constructor(private http: HttpClient) {}
  public getPokemon(): Observable<PokemonListApiResponse> {
    return this.http.get<PokemonListApiResponse>(`${this.baseUrl}${this.endpoints.get.pokemon()}`);
  }
}


