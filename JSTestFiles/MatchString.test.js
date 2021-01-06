const matchString = require('../JSFiles/MatchString')

test("Match the string ", () => {
    expect(
        matchString('srilakshmi')
    ).toMatch(/sri/)
})

test("Match the string ", () => {
    expect(
        matchString('srilakshmi')
    ).not.toMatch(/mno/)
})