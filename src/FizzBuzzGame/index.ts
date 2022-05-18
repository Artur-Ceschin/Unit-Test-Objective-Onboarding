export default class FizzBuzzGame {
  play(value: number): string {
    if (value % 2 === 0 && value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzzFoo'
    }
    if (value % 2 === 0 && value % 5 === 0) {
      return 'BuzzFoo'
    }
    if (value % 2 === 0 && value % 3 === 0) {
      return 'BuzzFoo'
    }
    if (value % 3 === 0 && value % 5 == 0) {
      return 'FizzBuzz'
    }
    if (value % 2 === 0) {
      return 'FizzFoo'
    }
    if (value % 3 === 0) {
      return 'Fizz'
    }
    if (value % 5 === 0) {
      return 'Buzz'
    }
    return value.toString()
  }
}
