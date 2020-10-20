import { Country } from '~/models/Country'
import { Currency } from '~/models/Currency'

export const countryMock:Country = new Country({
  name: 'Peru',
  alpha2Code: 'PE',
  region: 'America',
  currency: new Currency('Soles', 'PEN', 'S/.'),
  language: 'Spanish',
  latitude: '10.9872',
  longitude: '50.569'
})
