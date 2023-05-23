function lengthenDate(datestr) {
  const length = datestr.length;
  const str =
    datestr.slice(length - 4) +
    '/' +
    datestr.slice(length - 7, length - 4) +
    '/' +
    datestr.slice(0, 2);
  const date = new Date(str);

  const dateSansSuffix = date.toLocaleDateString('en-UK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const array = dateSansSuffix.split(' ');

  array[1] = array[1] + get_nth_suffix(parseInt(array[1]));

  return array.join(' ').replace(',', '');
}

function get_nth_suffix(date) {
  switch (date) {
    case 1:
    case 21:
    case 31:
      return 'st';
    case 2:
    case 22:
      return 'nd';
    case 3:
    case 23:
      return 'rd';
    default:
      return 'th';
  }
}

console.log(lengthenDate('21.03.2017'));

module.exports = lengthenDate;
