function checkUsernames(array) {
  const validUsername = /[a-z0-9_]/g;
  for (let i = 0; i < array.length; i++) {
    const pwd = array[i];
    const matches = pwd.match(validUsername);

    if (pwd.length < 5 || pwd.length > 20 || pwd.length !== matches.length) {
      return false;
    }
  }

  return true;
}

module.exports = checkUsernames;
