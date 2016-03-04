/**
 * @interface
 * */
 export default class PokemonRepository {
  list() {
    throw new Error('PokemonRepository#list must be implemented');
  }
}
