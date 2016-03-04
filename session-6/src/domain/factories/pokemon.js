import PokemonListUseCase from '../pokemon/pokemonListUseCase';
import ApiPokemonRepository from '../pokemon/apiPokemonRepository';
import PokemonEntity from '../pokemon/pokemonEntity';
import SpriteEntity from '../pokemon/spriteEntity';
import superagent from 'superagent';

export default class PokemonFactory {

  static pokemonListUseCase() {
    return new PokemonListUseCase({repository: PokemonFactory.apiPokemonRepository()});
  }

  static apiPokemonRepository() {
    return new ApiPokemonRepository(PokemonFactory.fetcher());
  }

  static fetcher(){
    return superagent;
  }

  static pokemonEntity({name, resource_uri, sprites} = {}){
    return new PokemonEntity({
      name,
      resource_uri,
      sprites: sprites && sprites.map(PokemonFactory.spriteEntity)
    });
  }

  static spriteEntity({id, resource_uri, image, pokemon}){
    return new SpriteEntity({id, resource_uri, image, pokemon: PokemonFactory.pokemonEntity(pokemon)});
  }
}
