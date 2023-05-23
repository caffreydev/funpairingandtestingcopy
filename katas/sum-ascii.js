function sumAscii(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  function sortFunction(a, b) {
    let aSum = 0;
    let bSum = 0;

    for (let i = 0; i < a.length; i++) {
      aSum += a.charCodeAt([i]);
    }

    for (let i = 0; i < b.length; i++) {
      bSum += b.charCodeAt([i]);
    }

    console.log('a sum is', aSum, 'b sum is', bSum);
    return bSum - aSum;
  }

  arr.sort(sortFunction);

  console.log(arr);

  return arr[0];
}

module.exports = sumAscii;
