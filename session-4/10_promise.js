const doPromise = () => {
  return new Promise((resolve, reject) => {
    // Do something
    if(error){
      reject(error);
    }
    // If succeeds
    resolve(result);
  });
};

let promiseResult = doPromise();

promise.then((result) => {
  // fullfillment
}).catch((err) => {
  // rejection
});