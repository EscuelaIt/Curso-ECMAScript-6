import HtmlComponent from './htmlComponent';

export default class Text extends HtmlComponent {
  constructor({text}){
    super({text});
    this._text = text;
  }
  
  render(){
    return document.createTextNode(this._text);
  }
}