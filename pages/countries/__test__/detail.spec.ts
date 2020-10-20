import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import { Country } from '~/models/Country'
import detail from '~/pages/countries/detail.vue'
import AppModule from '~/store/AppModule'
import { createStore } from '~/store'
import { countryMock } from '~/models/__mocks__/country-mock'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const store = createStore()

let country!:Country
let wrapper:Wrapper<detail>
let mockStore:AppModule

describe('Detail Page', () => {

  beforeAll(() => {

    mockStore = getModule(AppModule, store)

  })

  beforeEach(() => {

    country = countryMock

    mockStore.setCountry(countryMock)

    wrapper = mount(detail, { store, localVue })

  })

  it('Country name', () => {
    expect(country.name).toBe('Peru')
  })

  it('Country ISO Code', () => {
    expect(country.alpha2Code).toBe('PE')
  })

  it('Is a Vue component', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('Country Name', () => {
    expect(wrapper.text()).toContain(countryMock.name)
  })

  it('Country Code', () => {
    expect(wrapper.text()).toContain(countryMock.alpha2Code)
  })

  it('Country Language', () => {
    expect(wrapper.text()).toContain(countryMock.language)
  })
})
