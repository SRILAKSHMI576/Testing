const exceptionThrow = require("../JSFiles/exceptionThrow")


test("compiling android throe error", () => {
    expect(() =>
        exceptionThrow(Error)
    ).toThrow()
})