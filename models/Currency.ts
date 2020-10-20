export class Currency {

  name!: string
  code!: string
  symbol!: string

  constructor (name: string, code: string, symbol: string) {
    this.name = name
    this.code = code
    this.symbol = symbol
  }

}
