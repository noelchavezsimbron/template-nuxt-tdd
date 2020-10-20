import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import { createStore } from '~/store'
import { countriesMock } from '~/services/__mocks__/CountryFinder'
import index from '~/pages/countries/index.vue'
import BaseComponent from '~/mixins/BaseComponent'
import AppModule from '~/store/AppModule'
import Mock = jest.Mock

jest.mock('@/services/CountryFinder')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const store = createStore()

let wrapper:Wrapper<index>

describe('Countries List Page', () => {

  beforeAll(() => {
  })

  beforeEach(() => {
    wrapper = mount(index, { store, localVue })
  })

  it('Is Vue Component', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('Render All Countries', function () {

    countriesMock.forEach((countryMock) => {

      expect(wrapper.text()).toContain(countryMock.name)

    })
  })

  describe('When clicking Detail', () => {

    let navigateToDetailSpy:Mock

    beforeEach(() => {

      navigateToDetailSpy = jest.fn();

      (wrapper.vm as BaseComponent).appRouter.navigateToCountryDetail = navigateToDetailSpy
    })

    it('Navigates to country detail', () => {

      wrapper.findAll('.btn-detail').at(1).trigger('click')

      expect(navigateToDetailSpy).toHaveBeenCalled()
    })

    it('Commit state country', () => {

      const idx = 2
      const appModule = getModule(AppModule, store)

      wrapper.findAll('.btn-detail').at(idx).trigger('click')

      expect(appModule.currentCountry.alpha2Code).toEqual(countriesMock[idx].alpha2Code)
      expect(appModule.currentCountry.name).toEqual(countriesMock[idx].name)
    })

  })

})
