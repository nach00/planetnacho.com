<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-col>
        <v-row>
          <v-img
            src="/img/planet-nacho-splash.png"
            contain
            min-height="35vh"
            max-height="50vh"
          />
        </v-row>

        <v-row
          justify="center"
          class="warning--text landingPageSubtitle"
        >
          A PERSONAL WEBSITE
        </v-row>
      </v-col>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style lang="sass" scoped>

.landingPageSubtitle
  font-size: medium
  font-family: monotalic, monospace
  letter-spacing: .3em
  font-weight: 600
</style>
