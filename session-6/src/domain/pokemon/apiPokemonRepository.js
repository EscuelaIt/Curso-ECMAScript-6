import PokemonRepository from './pokemonRepository';
import PokemonFactory from '../factories/pokemon';

/**
 * @implements PokemonRepository
 * */
export default class ApiPokemonRepository extends PokemonRepository {
  constructor(fetcher){
    super(fetcher);
    this._fetcher = fetcher;
  }

  list({query = ''} = {}) {
    return new Promise((resolve, reject) => {
      this._fetcher.get('http://pokeapi.co/api/v1/pokemon')
        .query({ limit: 20 })
        .end((err, resp) => {
          if(err){
            reject(err);
            return;
          }
          try {
            resolve(JSON.parse(resp.text).objects.map(PokemonFactory.pokemonEntity))
          } catch(err) { reject(err); }
        });
      });
  };

  sprite({resource_uri} = {}){
    return new Promise((resolve, reject) => {
      this._fetcher.get(`http://pokeapi.co${resource_uri}`)
        .end((err, resp) => {
          if(err) {
            reject(err);
            return;
          }
          try {
            resolve(PokemonFactory.spriteEntity(JSON.parse(resp.text)));
          } catch(err) { reject(err); }
        })
      });
  }
}
