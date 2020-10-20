import { Component, Vue } from 'vue-property-decorator'
import { AppRouter } from '~/services/AppRouter'

@Component
export default class AppRouterMixin extends Vue {

  appRouter!:AppRouter

  created () {
    this.appRouter = new AppRouter(this.$router)
  }

}
