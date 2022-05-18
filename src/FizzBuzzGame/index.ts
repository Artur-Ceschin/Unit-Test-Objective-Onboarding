import Fizz from './FizzBuzzRules/Fizz'

export default class FizzBuzzGame {
  private fizz = new Fizz()

  play(value: number): string {
    if (value % 3 === 0 && value % 5 == 0) {
      return 'FizzBuzz'
    }
    if (this.fizz.validate(value)) return this.fizz.perform(value)
    if (value % 5 === 0) {
      return 'Buzz'
    }
    return value.toString()
  }
}
