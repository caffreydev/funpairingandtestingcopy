function mergeArrays(arr1, arr2) {
    const merge = {};
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            merge.push(arr1[i]);
        }
        if (i < arr2.length) {
            merge.push(arr2[i]);
        }
    }
    return merge;
}

module.exports = mergeArrays;
