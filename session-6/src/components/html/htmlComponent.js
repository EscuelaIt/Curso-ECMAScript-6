/**
 * @interface
 **/
export default class HtmlComponent {
  render(){
    throw new Error('You must implement the render() method');
  }
}