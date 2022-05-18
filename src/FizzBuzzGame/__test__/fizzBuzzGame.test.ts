import FizzBuzzGame from '../index'

test.each([
  ['3', 9, 'Fizz'],
  ['5', 25, 'Buzz'],
  ['2', 4, 'Foo'],
  ['2 e 3', 6, 'FizzFoo'],
  ['3 e 5', 15, 'FizzBuzz'],
  ['2 e 5', 10, 'BuzzFoo'],
  ['2, 3 e 5', 30, 'FizzBuzzFoo'],
])(
  'Numbers divisible by %p as %p should be replaced by the word %p',
  (description, value, expected) => {
    const fizzBuzzGame = new FizzBuzzGame()

    const result = fizzBuzzGame.play(value)

    expect(expected).toEqual(result)
  }
)

test('Numbers that are not divisible by 2, 3 or 5 should be returned', () => {
  const expectedValue = '7'
  const fizzBuzzGame = new FizzBuzzGame()

  const result = fizzBuzzGame.play(7)

  expect(expectedValue).toEqual(result)
})
