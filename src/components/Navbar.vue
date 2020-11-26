<template>
  <nav>
    <v-app-bar
      dense
      class="mdDark"
      absolute
    >
      <v-app-bar-nav-icon
        class="success--text d-flex d-md-none"
        @click="drawer = true"
      />
      <img
        src="../../public/img/logo/success--logo.svg"
        height="30px"
        alt="logo"
        class="mr-2 d-none d-md-flex"
      >
      <v-toolbar-title
        class="success--text mr-8"
      >
        planet nacho
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          class="flatSunflower--text mdDark d-none d-md-flex"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="mr-n4">
        <v-btn
          class="flatSunflower mdDark--text mdDark d-none d-md-flex"
          to="/contact"
        >
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="
        drawer"
      absolute
      temporary
      class="flatSunflower"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
            class="menu-item"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn
        class="mdDark flatSunflower--text ml-4"
        to="/contact"
      >
        Contact
      </v-btn>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        group: null,
        menuItems: [
          { title: 'home', link: '/' },
          { title: 'about', link: '/about' },
          { title: 'portfolio', link: '/portfolio' },
          { title: 'resume', link: '/resume' }
        ]
      }
    }
  }
</script>

<style lang="sass">
*
  font-family: monotalic, monospace

.menu-item
  text-transform: uppercase

.v-btn
  font-weight: 600
  letter-spacing: .3em
  font-size: small
  font-family: monotalic, monospace
  &:hover
    cursor: url("../../public/img/middle-finger-cursor.png"), auto
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
    cursor: url("../../public/img/middle-finger-cursor.png"), auto
    animation: jelly 0.5s
    text-shadow: 0 0 10px #f1c40f
    font-weight: 900
</style>
