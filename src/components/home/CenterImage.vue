<template>
  <v-container class="center-image" fluid fill-height>
    <v-img src="/img/planet-nacho-splash.png" max-height="350" contain />
  </v-container>
  <!-- 
  <v-row>
    <v-col>
      <v-img src="/img/planet-nacho-splash.png" max-height="350" contain />
    </v-col>
  </v-row> -->
</template>

<script>
export default {
  name: 'App',
  components: {
    // Fade: () => import("@/components/home/Fade")
  },
};
</script>

<style lang="sass" scoped>
.center-image
  position: relative
  // text-align: center
  // height: 100vh
  // margin: 0
  // padding: 0
  // display: flex
  // align-items: center
  // justify-content: center
</style>
