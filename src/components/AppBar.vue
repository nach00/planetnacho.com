<template>
  <div>
    <v-app-bar class="mdDark mdLight--text" absolute>
      <v-toolbar-title>
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
        <v-btn text class="flatSunflower--text" to="/github">Github</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          width
          text
          class="flatSunflower mdDark--text ml-5"
          to="/contact"
          style="margin-right:-15px"
        >Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
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
</style>
