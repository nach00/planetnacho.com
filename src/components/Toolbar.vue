<template>
  <v-toolbar class="mdDark mdLight--text" absolute>
    <v-toolbar-title max-width="100%">
      <router-link to="/">
        <v-icon color="success">mdi-earth</v-icon>
        <span class="success--text pr-4">planet nacho</span>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text class="flatSunflower--text" to="/">Home</v-btn>
      <v-btn text class="flatSunflower--text" to="/about">About</v-btn>
      <v-btn text class="flatSunflower--text" to="/portfolio">Portfolio</v-btn>
      <v-btn text class="flatSunflower--text" to="/resume">Resume</v-btn>
      <v-btn text class="flatSunflower--text" to="/recipes">Recipes</v-btn>
      <v-btn text class="flatSunflower--text" to="///https://www.github.com/nach00">Github</v-btn>
    </v-toolbar-items>
    <v-spacer />>
    <v-toolbar-items>
      <v-btn
        width
        text
        class="flatSunflower mdDark--text ml-5"
        to="/contact"
        style="margin-right:-15px"
      >Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>


<style lang="sass" scoped>
.v-btn
  font-weight: 700
  letter-spacing: 0.2em
  &:hover
    text-shadow: 0 0 10px #f1c40f


.v-btn
  :hover 
    cursor: url("/img/middle-finger-cursor.png"), auto
    animation: jelly 0.5s
    text-shadow: 0 0 10px #f1c40f
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











  // position: absolute
  // bottom: -1px
  // left: 0
  // right: 0
  // height: 1px
  // background: linear-gradient(to right, #fc28a8, #03edf9) !important
  // opacity: 1
  // z-index: 6

</style>
