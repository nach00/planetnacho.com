<template>
  <nav>
    <v-app-bar
      class="pt-10 pl-10 transparent"
      absolute
    >
      <v-app-bar-title>
        <v-img
          src="../../public/img/logo/logo-planet-nacho-white.svg"
          alt="logo"
        />
      </v-app-bar-title>

      <v-toolbar-items class="ml-5 align-center">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          class="transparent text-uppercase font-weight-black"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-icon
        class="white--text mr-5"
        href="https://linkedin.com"
      >
        mdi-linkedin
      </v-icon>
      <v-toolbar-items class="mr-10 align-center">
        <v-btn
          color="white"
          outlined
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
          { title: 'agency', link: '/agency' }
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
.v-btn
  font-weight: 900 !important
  font-size: 16px !important
  border-radius: 4px !important
  border-width: 2px !important
  max-height: 36px !important
</style>
