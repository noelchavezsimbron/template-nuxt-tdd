import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Country } from '~/models/Country'

@Module({
  name: 'AppModule',
  stateFactory: true,
  namespaced: true
})
export default class AppModule extends VuexModule {

  country: Country={} as Country
  counter: number = 0

  @Mutation
  increment (delta: number) {
    this.counter += delta
  }

  @Mutation
  setCountry (obj: Country) {
    this.country = obj
  }

  get currentCountry () {
    return this.country
  }

  @Action({ commit: 'setCountry' })
  findCountries () {

    console.log('Fetch countries from Rest api')

    return new Country({ alpha2Code: 'PE', name: 'Peru' })
  }

}
