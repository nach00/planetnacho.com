<template>
  <v-content>
    <v-toolbar
      class="mt-16 px-16 transparent"
      min-width="100vw"
      absolute
      flat
    >
      <v-toolbar-title
        style="cursor: pointer"
        @click="$router.push('/')"
      >
        <v-img
          src="../../public/img/logo/logo-planet-nacho-white.svg"
          alt="logo"
          width="100%"
        />
      </v-toolbar-title>
      <v-btn
        to="/agency"
        class="font-weight-black white--text d-none d-md-flex"
        plain
      >
        Agency
      </v-btn>
      <v-spacer />
      <v-btn
        icon
        plain
        class="white--text mr-5 d-none d-md-flex"
        href="https://www.linkedin.com/company/planet-nacho"
      >
        <v-icon>
          mdi-linkedin
        </v-icon>
      </v-btn>
      <v-btn
        outlined
        color="cheese"
        class="font-weight-black cheese--text d-none d-md-flex"
        href="mailto:oplanetnacho@gmail.com"
      >
        Contact
      </v-btn>
      <v-app-bar-nav-icon
        class="text--white d-md-none"
        color="white"
        @click.stop="drawer = !drawer"
      />
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="black--text cheese d-flex"
      width="100vw"
      style="min-height: 100vh"
    >
      <div
        class="mx-auto mt-10"
        style="max-width: 80vw"
      >
        <v-container
          class="justify-space-between align-center d-inline-flex"
        >
          <img
            src="../../public/img/logo/logo-planet-nacho-black.svg"
            alt="logo"
          >

          <v-btn
            icon
            plain
            class="black--text"
            @click="drawer = false"
          >
            <v-icon large>
              mdi-close
            </v-icon>
          </v-btn>
        </v-container>
        <div class="d-flex flex-column">
          <v-btn
            class="text transparent font-weight-black pa-10"
            depressed
            to="/agency"
            plain
          >
            Agency
          </v-btn>

          <v-btn
            class="text font-weight-black pa-5"
            depressed
            outlined
            href="mailto:oplanetnacho@gmail.com"
          >
            Contact
          </v-btn>

          <v-btn
            icon
            plain
            class="black--text pa-10"
            href="https://www.linkedin.com/company/planet-nacho"
            block
          >
            <v-icon>
              mdi-linkedin
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
    <!--    <v-navigation-drawer-->
    <!--      v-model="drawer"-->
    <!--      absolute-->
    <!--      temporary-->
    <!--      style="z-index: 999"-->
    <!--      class="white"-->
    <!--    >-->
    <!--      <v-list-->
    <!--        nav-->
    <!--        dense-->
    <!--      >-->
    <!--        <v-list-item-group-->
    <!--          v-model="group"-->
    <!--          active-class="deep-purple&#45;&#45;text text&#45;&#45;accent-4"-->
    <!--        >-->
    <!--          <v-list-item>-->
    <!--            <v-list-item-title>Foo</v-list-item-title>-->
    <!--          </v-list-item>-->

    <!--          <v-list-item>-->
    <!--            <v-list-item-title>Bar</v-list-item-title>-->
    <!--          </v-list-item>-->

    <!--          <v-list-item>-->
    <!--            <v-list-item-title>Fizz</v-list-item-title>-->
    <!--          </v-list-item>-->

    <!--          <v-list-item>-->
    <!--            <v-list-item-title>Buzz</v-list-item-title>-->
    <!--          </v-list-item>-->
    <!--        </v-list-item-group>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null
    }),

    watch: {
      group () {
        this.drawer = true
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
