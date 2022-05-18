export default class FizzFoo {
  private _fizzFoo = 'FizzFoo'

  validate(value: number): boolean {
    return value % 3 === 0 && value % 2 === 0
  }

  perform(value: number): string {
    return this.validate(value) ? this._fizzFoo : ''
  }
}
