import Default from '../Default'

test('When executing the method validate with numbers that are not divisible by 2, 3 or 5, should return true', () => {
  const expectedValue = true
  const _default = new Default()

  const result = _default.validate(1)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are divisible by 2, 3 or 5, should return false', () => {
  const expectedValue = false
  const _default = new Default()

  const result = _default.validate(3)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 2, 3 or 5, should return the value', () => {
  const expectedValue = '7'
  const _default = new Default()

  const result = _default.perform(7)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are divisible by 2, 3 or 5, should return an empty string', () => {
  const expectedValue = ''
  const _default = new Default()

  const result = _default.perform(3)

  expect(expectedValue).toEqual(result)
})
