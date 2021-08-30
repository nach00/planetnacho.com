<template>
  <div id="app">
    <v-app>
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
      <navbar />
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
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

@font-face
  font-family: 'Whirlybats'
  src: url("../public/fonts/WhirlybatsVariable.ttf") format("truetype")

//@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap')
//
@import url('https://rsms.me/inter/inter.css')
html
  font-family: 'Inter', sans-serif

@supports (font-variation-settings: normal)
html
  font-family: 'Inter var', sans-serif

*
  //cursor: url(../public/img/rocketship.png), auto
  font-family: "Inter var", sans-serif !important

.text
  font-family: "Inter var", sans-serif !important

  &-s
    @extend .text
    font-size: 12px
    letter-spacing: 0
    line-height: 17px

  &-m
    @extend .text
    font-size: 14px
    letter-spacing: -0.006em
    line-height: 20px

  &-l
    @extend .text
    font-size: 16px
    letter-spacing: -0.011em
    line-height: 22px

.heading
  font-family: "Inter var", serif !important

  &-s
    @extend .text
    font-size: 20px
    letter-spacing: -0.017em
    line-height: 28px

  &-m
    @extend .text
    font-size: 30px
    letter-spacing: -0.021em
    line-height: 42px

  &-l
    @extend .text
    font-size: 40px
    letter-spacing: -0.022em
    line-height: 56px

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
  filter: brightness(50%)

.tinted-bg
  background: rgba(0, 0, 0, .6)

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
  font-weight: 900
  &:hover
    background-size: 100% 3px
    color: inherit

.v-btn
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
