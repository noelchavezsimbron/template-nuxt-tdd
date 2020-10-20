import { Mixins } from 'vue-property-decorator'
import AppRouterMixin from '~/mixins/AppRouterMixin'

export default class BaseComponent extends Mixins(AppRouterMixin) {

}
