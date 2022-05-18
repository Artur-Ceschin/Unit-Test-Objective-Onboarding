import FizzFoo from '../FizzFoo'

test('When executing the method validate with numbers divisible by 2 and 3, should return true', () => {
  const expectedValue = true
  const fizzFooo = new FizzFoo()

  const result = fizzFooo.validate(6)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 2 and 3, should return false', () => {
  const expectedValue = false
  const fizzFooo = new FizzFoo()

  const result = fizzFooo.validate(4)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 2 and 3, should return the word FizzFoo', () => {
  const expectedValue = 'FizzFoo'
  const fizzFooo = new FizzFoo()

  const result = fizzFooo.perform(6)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 2 and 3, should return an empty string', () => {
  const expectedValue = ''
  const fizzFooo = new FizzFoo()

  const result = fizzFooo.perform(4)

  expect(expectedValue).toEqual(result)
})
