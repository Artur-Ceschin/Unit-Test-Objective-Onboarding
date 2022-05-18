import BuzzFoo from '../BuzzFoo'

test('When executing the method validate with numbers divisible by 5 and 2, should return true', () => {
  const expectedValue = true
  const buzzFoo = new BuzzFoo()

  const result = buzzFoo.validate(10)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 5 and 2, should return false', () => {
  const expectedValue = false
  const buzzFoo = new BuzzFoo()

  const result = buzzFoo.validate(7)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 5 and 2, should return the word BuzzFoo', () => {
  const expectedValue = 'BuzzFoo'
  const buzzFoo = new BuzzFoo()

  const result = buzzFoo.perform(10)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 5 and 2, should return an empty string', () => {
  const expectedValue = ''
  const buzzFoo = new BuzzFoo()

  const result = buzzFoo.perform(7)

  expect(expectedValue).toEqual(result)
})
