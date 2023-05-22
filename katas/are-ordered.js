function areOrdered(arr) {
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

module.exports = areOrdered;
