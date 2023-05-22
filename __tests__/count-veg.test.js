const countVeg = require('../katas/count-veg.js');

describe("countVeg", () => {
    test("should take a string and array as input and return the quantity", () => {
        expect(countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'root')).toBe(9) });

        });