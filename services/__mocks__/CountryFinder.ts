import { Country } from '~/models/Country'

export const countriesMock = [
  new Country({ alpha2Code: 'PE', name: 'Peru-mock' }),
  new Country({ alpha2Code: 'BZ', name: 'Brazil-mock' }),
  new Country({ alpha2Code: 'US', name: 'United States-mock' }),
  new Country({ alpha2Code: 'CO', name: 'Colombia-mock' })
]

export class CountryFinder {

  find (): Promise<Country[]> {

    return Promise.resolve(countriesMock)
  }

}
