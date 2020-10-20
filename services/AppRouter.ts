import VueRouter from 'vue-router'

export class AppRouter {

  private readonly router:VueRouter

  constructor (router: VueRouter) {
    this.router = router
  }

  navigateToCountryList () {
    this.router.push('/countries')
  }

  navigateToCountryDetail () {
    this.router.push('/countries/detail')
  }

  getParam (id:any) {
    if (!this.router) { return '' }
    return this.router.currentRoute.params[id]
  }

}
