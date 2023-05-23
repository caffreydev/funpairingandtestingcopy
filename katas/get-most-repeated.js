function getMostRepeated(string) {
    const getFrequencies = require("../katas/get-frequencies.js");
    const frequencies = getFrequencies(string);
    let mostRepeatedChar = '';
    let maxFrequency = 0;

    for (let char in frequencies) {
        if (frequencies[char] > maxFrequency || (frequencies[char] === maxFrequency && char < mostRepeatedChar)) {
        mostRepeatedChar = char;
        maxFrequency = frequencies[char];
        }
    }

return mostRepeatedChar;
}

module.exports = getMostRepeated;
