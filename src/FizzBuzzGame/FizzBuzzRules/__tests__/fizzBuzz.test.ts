import FizzBuzz from '../FizzBuzz'

test('When executing the method validate with numbers divisible by 3 and 5, should return true', () => {
  const expectedValue = true
  const fizzBuzz = new FizzBuzz()

  const result = fizzBuzz.validate(15)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 3 and 5, should return false', () => {
  const expectedValue = false
  const fizzBuzz = new FizzBuzz()

  const result = fizzBuzz.validate(4)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 3 and 5, should return the word FizzBuzz', () => {
  const expectedValue = 'FizzBuzz'
  const fizzBuzz = new FizzBuzz()

  const result = fizzBuzz.perform(15)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 3 and 5, should return an empty string', () => {
  const expectedValue = ''
  const fizzBuzz = new FizzBuzz()

  const result = fizzBuzz.perform(4)

  expect(expectedValue).toEqual(result)
})
