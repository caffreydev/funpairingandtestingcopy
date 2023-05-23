const orderVeg = require("../katas/order-veg.js");

describe("orderVeg", () => {
    test("should return new array in which veg is sorted in ascending order if only one item", () => {
        expect(orderVeg([
        
            {name: 'Broccoli', type: 'brassica', quantity: 1},
          
            ])).toEqual([
                {name: 'Broccoli', type: 'brassica', quantity: 1},
                
              ])
    })
    test("should return new array in which veg is sorted in ascending order", () => {
        expect(orderVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
            ])).toEqual([
                {name: 'Broccoli', type: 'brassica', quantity: 1},
                {name: 'Onion', type: 'bulb', quantity: 3},
                {name: 'Chard', type: 'leaf', quantity: 3},
                {name: 'Parsnip', type: 'root', quantity: 4},
                {name: 'Carrot', type: 'root', quantity: 5},
                {name: 'Runner beans', type: 'legume', quantity: 8}
              ])

    })
})