const { TestScheduler } = require("jest")
const findArray = require("../JSFiles/FindArray")


test("find string in array", () => {
    const containString = ["bread", "jam", "cup", "curd", "milk","food"]
    expect(
        findArray(containString)
    ).toContain('milk')
})