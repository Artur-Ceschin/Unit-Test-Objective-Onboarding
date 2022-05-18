import FizzBuzzGame from '../index'

test('Numbers divisible by 3 should be replaced by the word Fizz', () => {
  const expectedValue = 'Fizz'

  const fizzBuzzGame = new FizzBuzzGame()

  const result = fizzBuzzGame.play(3)

  expect(expectedValue).toEqual(result)
})

test('Numbers divisible by 5 should be replaced by the word Buzz', () => {
  const expectedValue = 'Buzz'

  const fizzBuzzGame = new FizzBuzzGame()

  const result = fizzBuzzGame.play(5)

  expect(expectedValue).toEqual(result)
})

test('Numbers divisible by 3 and 5 should be replaced by the word FizzBuzz', () => {
  const expectedValue = 'FizzBuzz'

  const fizzBuzzGame = new FizzBuzzGame()

  const result = fizzBuzzGame.play(15)

  expect(expectedValue).toEqual(result)
})

test('Numbers that are not divisible by 3 or 5 should be returned', () => {
  const expectedValue = '4'

  const fizzBuzzGame = new FizzBuzzGame()

  const result = fizzBuzzGame.play(4)

  expect(expectedValue).toEqual(result)
})
