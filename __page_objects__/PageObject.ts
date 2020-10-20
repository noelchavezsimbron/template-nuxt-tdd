import { Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import BaseComponent from '~/mixins/BaseComponent'

export class PageObject<V extends Vue | BaseComponent> {

  wrapper:Wrapper<V>

  constructor (wrapper: Wrapper<V>) {
    this.wrapper = wrapper
  }

  wait () {
    return new Promise(resolve => setImmediate(resolve))
  }

  text () {
    return this.wrapper.text()
  }

  html () {
    return this.wrapper.html()
  }

  contains (text:string) {
    expect(this.text()).toContain(text)
  }

  matchSnapshot () {
    expect(this.wrapper.html()).toMatchSnapshot()
  }

  setRouterSpy (routerSpy:any) {
    (this.wrapper.vm as BaseComponent).appRouter = routerSpy
  }

}
