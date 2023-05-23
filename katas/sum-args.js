function sumArgs(...args) {
  if (args.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }
}

module.exports = sumArgs;
