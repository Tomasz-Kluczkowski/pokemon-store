import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((resp) => {
      this.pokemonList = resp.results.map((pokemon) => {
        return {
          name: pokemon.name,
        } as Pokemon;
      });
      console.log(this.pokemonList)
    });
  }
}
