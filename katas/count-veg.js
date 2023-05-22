function countVeg(array, string) {
    

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
        if (obj.type === string) {
            sum += obj.quantity;
        
            }

        
    }
    return sum;

}

module.exports = countVeg;
