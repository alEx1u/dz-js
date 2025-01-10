window.addEventListener('load', function() {
  function promiseRace(promises) {
    return new Promise((resolve, reject) => {
      promises.map(promise => {
        return Promise.resolve(promise).then(resolve, reject)
      });
    })
  }
  
  const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Bee"));
  const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Bee2"));
  const promise3 = new Promise((resolve, reject) => this.setTimeout(reject, 900, 'asdfkj'));
  
  const result = promiseRace([promise1, promise2, promise3]);
  console.log(result)
})