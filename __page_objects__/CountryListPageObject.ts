import { Wrapper } from '@vue/test-utils'
import { PageObject } from '~/__page_objects__/PageObject'
import index from '~/pages/countries/index.vue'

export class CountryListPageObject extends PageObject<index> {

  wrapper:Wrapper<index>

  constructor (wrapper: Wrapper<index>) {
    super(wrapper)
    this.wrapper = wrapper
  }

  clickItemList (idx:number) {
    this.wrapper.findAll('.btn-detail').at(idx).trigger('click')
  }

}
