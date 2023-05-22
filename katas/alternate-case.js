function alternateCase(string) {
    const capitalised = string.toUpperCase();
    const noSpaces = capitalised.split(" ").join("");
    const array = noSpaces.split('');

    for (let i = 1; i < array.length; i+=2) {
       array[i] = array[i].toLowerCase();
    
    }
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            array.splice(i , 0, " ");
        }
    }
    return array.join("");
}

module.exports = alternateCase;
