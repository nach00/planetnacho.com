<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-col>
        <v-row
          justify="center"
          class="black pa-4"
        >
          <span class="warning--text landingPageSubtitle font-weight-bold">
            USER EXPERIENCE & USER INTERFACE SERVICES
          </span>
          <span class="flatSunflower--text description">
            Includes: 2 meetings per week (1-hour at the beginning of the week and a 1/2 hour check-in towards the end of the week). Daily updates provided upon request. Expected deliverables for starting rates: 2-3 ultra-high fidelity mockup screens, read/write/collab access to Figma/XD, multiple variations/options explored,
          </span>
        </v-row>

        <v-row
          justify="center"
        >
          <v-col class="warning--text landingPageSubtitle black pa-4  mt-1 mr-1">
            <span>
              Standard Delivery
            </span>
            <span class="eta">
              Delivery Time:
            </span>
            <span>
              1-2 weeks
            </span>
            <span class="ma-2 flatSunflower">
              Starting at $1kd
            </span>
          </v-col>
          <v-col class="warning--text landingPageSubtitle black pa-4  mt-1 ml-1">
            <span>
              Express Delivery
            </span>
            <span class="eta">
              Delivery Time:
            </span>
            <span>
              24-48 hours
            </span>
            <span>
              Starting at $5k
            </span>
          </v-col>
        </v-row>
        <v-btn @>
          BOOK AN APPOINTMENT
        </v-btn>
        <span class="fineprint flatSunflower--text">
          Not-so-Fine print: the first 1-hour pre-planning meeting is always free at the beginning of every launch! During this time, we'll clarify expectations moving forward. Any assets should be ready to hand off if necessary. Please see asset handoff requirements (coming soon).
        </span>
      </v-col>
    </v-container>
  </v-content>
</template>

<script>
  export default {}
</script>

<style lang="sass" scoped>
.eta
  font-size: small
  color: blue

.description
  font-size: x-small

.fineprint
  font-size: large
</style>
