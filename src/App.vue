<template>
  <div id="app">
    <v-app>
      <!--      <app-bar />-->
      <navbar />

      <video
        playsinline
        autoplay
        muted
        loop
        poster
        style="object-fit: cover; width: 100vw;height: 100vh;position: fixed;top: 0;left: 0; padding: 0"
      >
        <source
          src="../public/img/nebula.mp4"
          type="video/mp4"
        >
      </video>
      <router-view />
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      Navbar: () => import('../src/components/Navbar')
    }
  }
</script>

<style lang="sass">
@import url("https://use.typekit.net/ggq3gsy.css")

*
  cursor: url(../public/img/rocketship.png), auto

video
  object-fit: cover
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0

.tinted-bg
  background: rgba(0, 0, 0, .66)
</style>
