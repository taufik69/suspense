const WrapPromise = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise
    .then((res) => {
      setTimeout(() => {
        status = "success";
        response = res;
      }, 1000);
    })
    .catch((err) => {
      status = "error";
      response = err;
    });

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error": {
        throw response;
      }
      default:
        return response;
    }
  };
  return {
    read,
  };
};

export default WrapPromise;
