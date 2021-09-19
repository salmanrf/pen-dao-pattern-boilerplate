async function wrapTryCatch(promise) {
  if(!(promise instanceof Promise)) {
    const error = new Error("Must provide a promise instance");
    throw error;
  }

  try {
    const res = await(promise);
    return [res, null];
  } catch(err) {
    return [null, err];
  }
}

module.exports = {wrapTryCatch};