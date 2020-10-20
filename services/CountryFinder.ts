import axios from 'axios'
import { Country } from '~/models/Country'
import { Currency } from '~/models/Currency'

export class CountryFinder {

  private readonly baseUrl!: string

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async find (): Promise<Country[]> {

    const data:[] = await axios.get(this.baseUrl).then(response => response.data)

    return data.map(this.mapCountry)
  }

  private mapCountry (item:any) {

    const currency = item.currencies && item.currencies.length > 0 ? item.currencies[0] : {}

    const language = item.languages && item.languages.length > 0 ? item.languages[0].name : ''

    return new Country({
      name: item.name,
      flag: item.flag,
      alpha2Code: item.alpha2Code,
      region: item.region,
      currency: new Currency(currency.name, currency.code, currency.symbol),
      language,
      latitude: item.latlng[0],
      longitude: item.latlng[1]
    })

  }

}
