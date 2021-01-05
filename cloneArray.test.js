const cloneArray = require('./cloneArray')


// test("properly clone array", () => {
// 	expect(
// 		cloneArray([1,2,3])
// 	).toEqual([1,2,3])
// })

test("properly clone array", () => {
	const array = [1,2,3]
	expect(
		cloneArray(array)
	).toEqual(array) //to check equal values used toEqual

	expect(
		cloneArray(array)
	).not.toBe(array)
})