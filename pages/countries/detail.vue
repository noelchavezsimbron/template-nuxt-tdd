<template>
  <div>
    <b-container class="main-container">
      <b-row class="list-countries justify-content-center align-items-center">
        <b-card title="Country Detail" border-variant="light" class="text-center">
          <b-card-body body-class="text-left">
            <b-card
              :img-src="country.flag"
              img-width="300"
              :img-alt="country.name"
              img-left
              class="mb-3"
              style="width: 40em"
            >
              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong> Country Name:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.name }}
                </b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong>Code alpha2:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.alpha2Code }}
                </b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong>Region:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.region }}
                </b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong>Currency:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.currency.code }}
                </b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong>Language:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.language }}
                </b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong>Latitude:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.latitude }}
                </b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col class="col-6">
                  <strong>Longitude:&nbsp;</strong>
                </b-col>
                <b-col class="col-6">
                  {{ country.longitude }}
                </b-col>
              </b-row>
            </b-card>

            <a href="#" class="card-link" @click="goToBackPage">&lt; Go to Back </a>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { Country } from '~/models/Country'
import AppModule from '~/store/AppModule'
import BaseComponent from '~/mixins/BaseComponent'

@Component
export default class CountryDetail extends BaseComponent {

  country={} as Country

  created () {
    const appModule = getModule(AppModule, this.$store)

    this.country = appModule.currentCountry
  }

  goToBackPage () {
    this.appRouter.navigateToCountryList()
  }

}
</script>

<style scoped>

</style>
