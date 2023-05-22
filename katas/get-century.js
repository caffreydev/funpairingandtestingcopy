function getCentury(year) {
  const century = Math.floor(year / 100) + 1;

  let suffix = 'th';
  switch (century) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      break;
  }

  const centString = century.toString();
  const length = centString.length;
  const lastDigit = centString[length - 1];
  const secLastDigit = centString[length - 2];

  if (lastDigit === '1' && secLastDigit !== '1') {
    suffix = 'st';
  } else if (lastDigit === '2' && secLastDigit !== '1') {
    suffix = 'nd';
  } else if (lastDigit === '3' && secLastDigit !== '1') {
    suffix = 'rd';
  }

  return century + suffix;
}

module.exports = getCentury;
