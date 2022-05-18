import Foo from '../Foo'

test('When executing the method validate with numbers divisible by 2, should return true', () => {
  const expectedValue = true
  const foo = new Foo()

  const result = foo.validate(4)

  expect(expectedValue).toEqual(result)
})

test('When executing the method validate with numbers that are not divisible by 2, should return false', () => {
  const expectedValue = false
  const foo = new Foo()

  const result = foo.validate(3)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers divisible by 2, should return the word Foo', () => {
  const expectedValue = 'Foo'
  const foo = new Foo()

  const result = foo.perform(4)

  expect(expectedValue).toEqual(result)
})

test('When executing the method perform with numbers that are not divisible by 2, should return an empty string', () => {
  const expectedValue = ''
  const foo = new Foo()

  const result = foo.perform(3)

  expect(expectedValue).toEqual(result)
})
