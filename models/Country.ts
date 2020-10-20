import { OptionItem } from '~/models/OptionItem'
import Option from '~/models/Option'
import { Currency } from '~/models/Currency'

interface CountryProps {
  name?: string
  alpha2Code?: string
  region?: string
  currency?: Currency
  flag?: string
  language?:string
  latitude?:string
  longitude?:string
}

export class Country implements OptionItem {

  name?: string
  alpha2Code?: string
  region?: string
  currency?: Currency
  flag?: string
  language?:string
  latitude?:string
  longitude?:string

  constructor (props?:CountryProps) {
    if (props) {
      this.name = props.name
      this.alpha2Code = props.alpha2Code
      this.region = props.region
      this.currency = props.currency
      this.flag = props.flag
      this.language = props.language
      this.latitude = props.latitude
      this.longitude = props.longitude
    }
  }

  description (): string {
    return `${this.alpha2Code}- ${this.name}`
  }

  toOption (): Option {
    return new Option(this.alpha2Code!, this.description())
  }

}
