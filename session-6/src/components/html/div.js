import HtmlComponent from './htmlComponent';

export default class Div extends HtmlComponent {
  constructor(className){
    super(className);
    this._className = className;
    this._children = new Set();
  }

  appendChild(element){
    this._children.add(element);
  }

  render(){
    const div = document.createElement('div');
    div.className = this._className;

    for(let child of this._children){
      console.log(child)
      div.appendChild(child.render())
    }

    return div;
  }
}