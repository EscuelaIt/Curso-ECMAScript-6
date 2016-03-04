import HtmlComponent from './htmlComponent';

export default class Image extends HtmlComponent {
  constructor({className, src}) {
    super({className, src});
    this._src = src;
    this._className = className;
  }

  render() {
    const img = document.createElement('img');
    const src = document.createAttribute('src');
    src.value = `http://pokeapi.co/${this._src}`;
    img.setAttributeNode(src);
    img.className = this._className;
    return img;
  }
};