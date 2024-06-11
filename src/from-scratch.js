const resolvedWrapper = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
};

const rejectedWrapper = (value) => {
  return new Promise((resolve, reject) => {
    reject(new Error(value));
  });
};

const handleResolvedPromise = (promiseValue) => {
  return promiseValue.then((value) => {
    console.log(value);
    return value;
  });
};

const handleResolvedOrRejectedPromise = (promiseValue) => {
  return promiseValue
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    });
};

const pauseForMs = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};

pauseForMs(1000);
