import Buzz from './FizzBuzzRules/Buzz'
import BuzzFoo from './FizzBuzzRules/BuzzFoo'
import Fizz from './FizzBuzzRules/Fizz'
import FizzBuzz from './FizzBuzzRules/FizzBuzz'
import FizzBuzzFoo from './FizzBuzzRules/FizzBuzzFoo'
import FizzFoo from './FizzBuzzRules/FizzFoo'
import Foo from './FizzBuzzRules/Foo'

export default class FizzBuzzGame {
  private fizzBuzzFoo = new FizzBuzzFoo()
  private buzzFoo = new BuzzFoo()
  private fizzFoo = new FizzFoo()
  private fizzBuzz = new FizzBuzz()
  private fizz = new Fizz()
  private foo = new Foo()
  private buzz = new Buzz()

  play(value: number): string {
    if (this.fizzBuzzFoo.validate(value)) return this.fizzBuzzFoo.perform(value)
    if (this.buzzFoo.validate(value)) return this.buzzFoo.perform(value)
    if (this.fizzFoo.validate(value)) return this.fizzFoo.perform(value)
    if (this.fizzBuzz.validate(value)) return this.fizzBuzz.perform(value)
    if (this.foo.validate(value)) return this.foo.perform(value)
    if (this.fizz.validate(value)) return this.fizz.perform(value)
    if (this.buzz.validate(value)) return this.buzz.perform(value)

    return value.toString()
  }
}
