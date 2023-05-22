function sumDigits(num) {
  const numDigits = Math.floor(Math.log10(num)) + 1;
  const arr = num.toString().split('');

  let digitSum = 0;
  for (let i = 0; i < arr.length; i++) {
    digitSum += parseInt(arr[i]);
  }

  return digitSum;
}

module.exports = sumDigits;
