import Entity from '../entity';
import capitalize from 'underscore.string/capitalize';

export default class PokemonEntity extends Entity {
  constructor({name, resource_uri, sprites} = {}){
    super({name, resource_uri});

    this._name = name;
    this.resource_uri = resource_uri;
    this.sprites = sprites;
  }

  get name() {
    return capitalize(this._name);
  }

  set image(value) {
    this._image = value;
  }

  get image() {
    return this._image;
  }
}