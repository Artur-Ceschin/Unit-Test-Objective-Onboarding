export default class Fizz {
  private _fizz = 'Fizz'

  validate(value: number): boolean {
    return value % 3 === 0
  }

  perform(value: number): string {
    return this.validate(value) ? this._fizz : ''
  }
}
