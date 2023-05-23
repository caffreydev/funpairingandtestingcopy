function getFrequencies(str) {
    const frequencies = {};

    const filteredStr = str.replace(/[^a-zA-Z0-9]/g, '');
    //console.log(filteredStr);

    for (let char of filteredStr) {
        char = char.toLowerCase();

        frequencies[char] = (frequencies[char] || 0) + 1;
    }
    return frequencies;
    }



module.exports = getFrequencies;
