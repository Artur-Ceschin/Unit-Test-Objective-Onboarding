import FizzBuzzFoo from '../FizzBuzzFoo'

test('When executing the method validate with numbers divisible by 2, 3 and 5, should return true', () => {
  const expectedValue = true
  const fizzBuzzFoo = new FizzBuzzFoo()

  const result = fizzBuzzFoo.validate(30)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 2, 3 and 5, should return false', () => {
  const expectedValue = false
  const fizzBuzzFoo = new FizzBuzzFoo()

  const result = fizzBuzzFoo.validate(4)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 2, 3 and 5, should return the word FizzBuzzFoo', () => {
  const expectedValue = 'FizzBuzzFoo'
  const fizzBuzzFoo = new FizzBuzzFoo()

  const result = fizzBuzzFoo.perform(30)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 2, 3 and 5, should return an empty string', () => {
  const expectedValue = ''
  const fizzBuzzFoo = new FizzBuzzFoo()

  const result = fizzBuzzFoo.perform(4)

  expect(expectedValue).toEqual(result)
})
