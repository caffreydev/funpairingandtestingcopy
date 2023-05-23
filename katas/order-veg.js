function orderVeg(array) {
    return array.sort((a, b) => a.quantity - b.quantity);
}

module.exports = orderVeg;
