const subtract = require('../JSFiles/subtract')

test('properly subtract two numbers', () => {
	expect(
		subtract(1, 3)
	).toBe(-2)
})