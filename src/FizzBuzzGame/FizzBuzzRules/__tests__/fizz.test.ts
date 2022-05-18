import Fizz from '../Fizz'

test('When executing the method validate with numbers divisible by 3, should return true', () => {
  const expectedValue = true
  const fizz = new Fizz()

  const result = fizz.validate(3)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 3, should return false', () => {
  const expectedValue = false
  const fizz = new Fizz()

  const result = fizz.validate(4)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 3, should return the word Fizz', () => {
  const expectedValue = 'Fizz'
  const fizz = new Fizz()

  const result = fizz.perform(3)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 3, should return an empty string', () => {
  const expectedValue = ''
  const fizz = new Fizz()

  const result = fizz.perform(4)

  expect(expectedValue).toEqual(result)
})
