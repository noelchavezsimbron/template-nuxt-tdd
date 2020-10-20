<template>
  <div class="row align-items-center">
    <b-col class="col-2">
      <img :src="country.flag" width="50">
    </b-col>
    <b-col class="col-7 ">
      <b-card-text>{{ country.description() }}</b-card-text>
    </b-col>
    <b-col class="col-3 text-right">
      <b-button class="btn-primary btn-detail" @click="onSelected">
        +
      </b-button>
    </b-col>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { Country } from '~/models/Country'

@Component
export default class CountryItem extends Vue {

  @Prop({ type: Object, required: true }) readonly country!: Country

  @Emit()
  onSelected () {
    return this.country
  }

}
</script>

<style scoped>

</style>
