require('harmony-reflect')

/*
Supported in node with:
https://github.com/tvcutsem/harmony-reflect
use node --harmony-proxies
*/
const target = {};
const handler = {
  get(target, propKey, receiver) {
    console.log(`get ${propKey}`);
    return 'hello';
  }
}

const proxy = new Proxy(target, handler);

console.log(proxy.foo); 
// get foo
// hello