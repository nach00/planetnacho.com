<template>
  <div id="app">
    <v-app>
      <app-bar />
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
$cheese: "#f1c40f"
//@import url("https://use.typekit.net/ggq3gsy.css")
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap')
@font-face
  font-family: 'Whirlybats'
  src: url("../public/fonts/WhirlybatsVariable.ttf") format("truetype")

@font-face
  font-family: 'Whirly Birdie'
  src: url("../public/fonts/WhirlyBirdieVariable.ttf") format("truetype")

*
  //cursor: url(../public/img/rocketship.png), auto
  //font-family: "Whirly Birdie", serif !important
  font-family: "Open Sans", serif !important

html
  background-color: black

div, span
  color: white

video
  object-fit: cover
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  background-color: black

.tinted-bg
  background: rgba(0, 0, 0, .8)

.orange-divider
  background-color: #f1c40f
  height: 1px

.gray-divider
  background-color: #888888
  height: 1px

.fancy-link
  text-decoration: none
  background-image: linear-gradient(#f1c40f, #f1c40f)
  background-repeat: no-repeat
  background-position: bottom left
  background-size: 0 3px
  transition: background-size 500ms ease-in-out
  font-weight: 800

.fancy-link:hover
  background-size: 100% 3px
  color: inherit

.v-btn
  //letter-spacing: .3em
  //font-size: small
  //font-family: monotalic, monospace
  &:hover
    animation: jelly 0.5s
    text-shadow: 0 0 10px #f1c40f
    font-weight: 900
  @keyframes jelly
    0%,
    100%
      transform: scale(1, 1)
    25%
      transform: scale(0.9, 1.1)
    50%
      transform: scale(1.1, 0.9)
    75%
      transform: scale(0.95, 1.05)

.v-btn__content
  &:hover
    animation: jelly 0.5s !important
    text-shadow: 0 0 10px #f1c40f !important
    font-weight: 900 !important

.wb-icon
  font-family: 'Whirlybats', sans-serif !important
  font-weight: normal !important
  font-style: normal !important
  display: inline-block !important
  white-space: nowrap !important
  word-wrap: normal !important
  direction: ltr !important
  font-feature-settings: 'liga' !important
  -webkit-font-smoothing: antialiased !important
  text-rendering: optimizeLegibility !important
  -moz-osx-font-smoothing: grayscale !important
  @keyframes whirlyAnimate
    0%
      font-variation-settings: "anim" 100
    100%
      font-variation-settings: "anim" 200

#whirlybat
  animation: whirlyAnimate 1s linear infinite

</style>
