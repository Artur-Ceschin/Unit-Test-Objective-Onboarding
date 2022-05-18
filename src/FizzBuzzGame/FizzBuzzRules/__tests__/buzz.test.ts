import Buzz from '../Buzz'

test('When executing the method validate with numbers divisible by 5, should return true', () => {
  const expectedValue = true
  const buzz = new Buzz()

  const result = buzz.validate(5)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 5, should return false', () => {
  const expectedValue = false
  const buzz = new Buzz()

  const result = buzz.validate(6)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 5, should return the word Buzz', () => {
  const expectedValue = 'Buzz'
  const buzz = new Buzz()

  const result = buzz.perform(5)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 5, should return an empty string', () => {
  const expectedValue = ''
  const buzz = new Buzz()

  const result = buzz.perform(4)

  expect(expectedValue).toEqual(result)
})
