export default class Buzz {
  private _buzz = 'Buzz'

  validate(value: number): boolean {
    return value % 5 === 0
  }

  perform(value: number): string {
    return this.validate(value) ? this._buzz : ''
  }
}
