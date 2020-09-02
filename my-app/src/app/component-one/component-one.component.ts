import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})

export class ComponentOneComponent implements OnInit {

  private pokemons: any = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchPokedex();
  }

  private fetchPokedex(): void {
    console.log('fetching...');

    fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then(response => response.json())
      .then(({ pokemon_entries }) => {
        pokemon_entries.forEach(({ entry_number: id, pokemon_species: { name,  url}}) => {
          this.pokemons.push({
            id,
            url,
            name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          });
        });
      })
      .catch(error => {
        console.error('Ops, algo deu errado...');
        console.error(error);

        alert('Ops, algo deu errado...');
      });
  }
}
