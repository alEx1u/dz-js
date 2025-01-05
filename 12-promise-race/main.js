function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    const resolvedPromises = promises.map((promise) => {
      return new Promise((innerResolve, innerReject) => {
        promise.then(innerResolve).catch(innerReject);
      });
    });
    Promise.allSettled(resolvedPromises)
      .then((results) => {
        const firstFullfilled = results.find(
          (result) => (result.status = "fulfilled")
        );
        if (firstFullfilled) {
          console.log(firstFullfilled.value);
          resolve(firstFullfilled.value);
        } else {
          reject(new Error("no promises were fulfilled"));
        }
      })
      .catch((e) => console.error(e));
  });
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Bee"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Bee2"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "Boo")
);

promiseRace([promise1, promise2, promise3]);
