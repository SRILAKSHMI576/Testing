const { TestScheduler } = require("jest")
const add = require("./add")


test("addding numbers", () => {
    expect(
        add(2,4)
    ).toBe(6)
})