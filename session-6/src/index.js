import Card from './components/card';
import Pokedex from './domain';
import './index.scss';

Pokedex.get('pokemon_list_use_case')
  .execute()
  .then((pokemons) => {
    return pokemons.map(p => new Card(p))
  })
  .then((cards) => {
    for(let card of cards) {
      document.body.appendChild(card.render());
    }
  });