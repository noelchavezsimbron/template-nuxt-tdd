<template>
  <div>
    <b-container class="main-container">
      <b-row class="list-countries justify-content-center align-items-center">
        <b-col class="col-7">
          <b-card-title class="text-center mt-4 mb-4">
            Country List
          </b-card-title>
          <div>
            <b-list-group class="country-list-container">
              <b-list-group-item v-for="country in countries" :key="country.alpha2Code">
                <CountryItem :country="country" @on-selected="viewDetail" />
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import BaseComponent from '~/mixins/BaseComponent'
import { CountryFinder } from '~/services/CountryFinder'
import { Country } from '~/models/Country'
import AppModule from '~/store/AppModule'
import CountryItem from '~/components/CountryItem.vue'

@Component({
  components: { CountryItem }
})
export default class Index extends BaseComponent {

  private countryFinder!: CountryFinder

  countries:Country[]=[]

  async created () {
    this.countryFinder = new CountryFinder(process.env.url_countries as string)
    this.countries = await this.countryFinder.find()
  }

  viewDetail (country:Country) {

    const appModule = getModule(AppModule, this.$store)

    appModule.setCountry(country)

    this.appRouter.navigateToCountryDetail()
  }

}
</script>

<style scoped>

  .main-container{
    height: 60vh;
  }
  .list-countries{
    height: inherit;
  }

  .country-list-container{
    max-height: 70vh;
    overflow-y: scroll;
  }
</style>
