const { TestScheduler } = require("jest")
const add = require("../JSFiles/add")


test("addding numbers", () => {
    expect(
        add(2,4)
    ).toBe(6)  //to match exact values used toBe
})