import Vuex from 'vuex'
import AppModule from '~/store/AppModule'

export function createStore () {
  return new Vuex.Store({
    modules: {
      AppModule
    }
  })
}
