/**
 * @interface
 * */
 export default class PokemonRepository {
  list({query = ''} = {}) {
    throw new Error('PokemonRepository#list must be implemented');
  }

  sprite({resource_uri} = {}){
    throw new Error('PokemonRepository#sprite must be implemented');
  }
}
