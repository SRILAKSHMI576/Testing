const { TestScheduler } = require("jest")
const objectReturn = require("./object")


test("object assigned", () => {
    const data = {one : 1};
    data['two'] = 2;
    expect(
        objectReturn(data)
    ).toEqual({one:1, two:2})
})