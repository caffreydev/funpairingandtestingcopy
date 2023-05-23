function getDistinctLetters(str1, str2) {
  //return (str1 + str2).split('').sort().join('');

  const combined = str1 + str2;
  let uniqueLetters = '';
  for (let i = 0; i < combined.length; i++) {
    const regEx = new RegExp(combined[i], 'g');
    if (combined.match(regEx).length === 1) {
      uniqueLetters += combined[i];
    }
  }

  return uniqueLetters.split('').sort().join('');
}

module.exports = getDistinctLetters;
