import PokemonFactory from './factories/pokemon';

class Pokedex {
  constructor(){
    this._deps = new Map();

    this._deps.set('pokemon_list_use_case', PokemonFactory.pokemonListUseCase());
  }

  get(key) {
    if(this._deps.has(key))
      return this._deps.get(key);
    console.warn(`Service ${key} is not implemented in the current version of the domain`);
  }
}

export default new Pokedex();
