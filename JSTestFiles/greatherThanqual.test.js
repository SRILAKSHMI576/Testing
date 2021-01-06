const greatherThanEqual = require("../JSFiles/greatherThanEqual")

test("greatherThanEual or not" , () => {
    expect(
        greatherThanEqual(4)
    ).toBeGreaterThan(1)
})