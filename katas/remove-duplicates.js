function removeDuplicates(arr) {
  return arr.filter((val, index) => index === arr.indexOf(val));
}

module.exports = removeDuplicates;
