function range(length, start = 0, step = 1) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(start + i * step);
  }

  console.log(arr);
  return arr;
}

module.exports = range;
