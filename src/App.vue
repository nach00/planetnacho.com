<template>
  <div id="app">
    <v-app>
      <AppBar />
      <BackgroundVideo />
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    BackgroundVideo: () => import("@/components/home/BackgroundVideo"),
    Toolbar: () => import("@/components/Toolbar"),
    Toolbar3: () => import("@/components/Toolbar3"),
    // Toolbar2: () => import('@/components/Toolbar2'),
    AppBar: () => import("@/components/AppBar")
  },
  data: () => ({
    date: new Date().getFullYear()
  })
};
</script>

<style lang="sass">
@import url("https://use.typekit.net/ggq3gsy.css")

.tinted-bg
  background: rgba(0, 0, 0, .66)

  
body,
span,
div
  font-family: monotalic, sans-serif
  cursor: url('/img/rocketship.png'), auto

</style>
