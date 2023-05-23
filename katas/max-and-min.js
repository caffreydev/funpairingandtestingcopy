function max(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return Math.max(...arr);
}

function min(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.min(...arr);
}

module.exports = { max, min };
