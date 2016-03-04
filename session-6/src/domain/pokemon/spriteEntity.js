import Entity from '../entity';

export default class SpriteEntity extends Entity {
  constructor({id, image, resource_uri, pokemon} = {}) {
    super({id, image, resource_uri, pokemon});
    this.id = id;
    this.image = image;
    this.resource_uri = resource_uri;
    this.pokemon = pokemon;
  }
}