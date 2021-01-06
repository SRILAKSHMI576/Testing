const addingPositiveNumbers = require("../JSFiles/addingPositiveNumbers")


test("addding positive numbers not equal to be zero", () => {
    for(let a = 1; a < 10; a++){
        for(let b =1; b < 10; b++ ){
            expect(
                addingPositiveNumbers(a+b)
            ).not.toBe(0)
        }
    }
})