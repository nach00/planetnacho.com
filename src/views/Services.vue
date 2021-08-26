<template>
  <v-content>
    o

    <v-container
      fluid
      fill-height
    >
      <v-col>
        <div
          id="intro"
          class="box__section--theme-1"
        >
          <div class="box__heading--theme-1 flatSunflower--text">
            Services
          </div>
          <div class="box__content--theme-1">
            <h1>UX/UI Design Package (Alpha Testing)</h1>
            <p>Perfect for new feature upgrades to existing designs.</p>
            <p>Not recommended for starting a new project.</p>
            <p>This Alpha Testing program will end September 30, 2021. It is designed to identify problems before releasing to the public. An exit survey may be provided at the end.</p>
            <ul class="overline">
              <li>3 high fidelity mockup screens</li>
              <li>Original Adobe XD or Figma Working File</li>
              <li>All associated assets (icons, logos, fonts, if applicable)</li>
              <li>Developer handoff link/style guide</li>
              <li>Daily update available upon request</li>
            </ul>
            <br>
            <p>Standard expected delivery: 2 weeks (You'll receive a zip file with abovementioned items the second Tuesday following the Launch Meeting.</p>
            <p>Please review the Policy page for client expectations and requirements.</p>
          </div>
        </div>
      </v-col>
    </v-container>

    <v-container
      fluid
      fill-height
    >
      <v-col>
        <v-row
          justify="center"
          class="black pa-4"
        />

        <v-row
          justify="center"
        >
          <v-col class="white--text landingPageSubtitle black pa-4  mt-1 mr-1">
            <div>
              Standard Delivery
            </div>
            <div class="caption">
              1-2 weeks
            </div>
            <span class="pa-2 success black--text d-flex">
              <span class="overline">
                Starting at
              </span>
              <span class="price">
                $1k
              </span>
            </span>
            </span>
          </v-col>
          <v-col class="white--text landingPageSubtitle black pa-4  mt-1 ml-1">
            <div>
              Express Delivery
            </div>
            <div class="caption">
              24-48 hours
            </div>
            <span class="pa-2 flatSunflower black--text d-flex">
              <span class="overline">
                Starting at
              </span>
              <span class="price">
                $5k
              </span>
            </span>
            </div>
          </v-col>
        </v-row>
        <v-btn @>
          BOOK AN APPOINTMENT
        </v-btn>
      </v-col>
    </v-container>
  </v-content>
</template>

<script>
  export default {}
</script>

<style lang="sass" scoped>
.eta
  font-size: small
  color: blue

.description
  font-size: x-small

.fineprint
  font-size: large

.price
  font-size: xx-large

$white: hsla(0, 0%, 100%, 1)
$platinum: hsla(0, 0%, 93%, 1)
$onyx: hsla(0, 0%, 7%, 1)
$black: hsla(0, 0%, 0%, 1)

$coolGray-0: hsla(210, 20%, 98%, 1)
$coolGray-1: hsla(220, 14%, 96%, 1)
$coolGray-2: hsla(220, 13%, 91%, 1)
$coolGray-3: hsla(216, 12%, 84%, 1)
$coolGray-4: hsla(218, 11%, 65%, 1)
$coolGray-5: hsla(220, 9%, 46%, 1)
$coolGray-6: hsla(215, 14%, 34%, 1)
$coolGray-7: hsla(217, 19%, 27%, 1)
$coolGray-8: hsla(215, 28%, 17%, 1)
$coolGray-9: hsla(221, 39%, 11%, 1)

$blue: hsla(221, 67%, 52%, 1)
$blue-light: hsla(226, 100%, 72%, 1)
$blue-dark: hsla(217, 100%, 32%, 1)

$box-1-heading-bg: transparent
$box-1-outline: $box-1-heading-bg
$box-1-section-bg: transparentize($black, .25)

$box-2-heading-bg: $coolGray-1
$box-2-outline: $box-2-heading-bg
$box-2-section-bg: transparentize($coolGray-1, .25)

$sans: Helvetica Neue
$mono: Courier New

$spacing-1: 0.25rem
$spacing-2: 0.5rem
$spacing-3: 0.75rem
$spacing-4: 1rem

$shadow-default: 0 2px 4px 0 rgba(0, 0, 0, 0.10)
$shadow-md: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08)
$shadow-lg: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)
$shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)
$shadow-outline: 0 0 0 3px rgba(52, 144, 220, 0.5)
$shadow-none: none

*
  background-color: transparent
  font-family: $sans
  position: relative

body
  background-color: $coolGray-0
  padding: $spacing-2

a
  color: $blue
  text-decoration: none

ul, li
  color: $platinum
  list-style: none
  margin: 0
  //padding: $spacing-4 0 0 0
  //padding: $spacing-4 0

  &::before
    padding: 0
    //content: "◣"
    color: $blue
    margin-right: $spacing-4

h1
  margin: 0
  font-size: medium
  color: $white

p
  font-size: small
  color: $platinum

  &:last-child
    margin-bottom: 0

.icon
  background: $blue

button
  height: 44px
  width: 100%
  border: $blue solid $spacing-1
  color: $black
  //text-shadow: 0 0 4px transparentize($black, 0)
  font-size: small
  text-transform: uppercase
  font-weight: 700
  letter-spacing: .2em
  background-color: transparentize($blue, .5)

  &:hover
    color: $white

video
  object-fit: cover
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  filter: brightness(150%)

#intro
  margin-top: 0

.links
  display: grid
  //place-content: center
  grid-template-columns: 1fr 1fr 1fr 1fr

.icon
  padding: $spacing-4
  max-width: 10%

.title
  font-size: large
  font-weight: 700
  color: $black

.logo-triangle
  color: $blue
  font-size: medium
  margin-right: $spacing-2

.box
  margin: 0

  &__section
    @extend .box
    padding: $spacing-2

    &:first-child
      margin-top: 0

    &:last-child
      margin-bottom: 0

    &--theme-1
      @extend .box__section
      outline: $box-1-outline solid $spacing-2
      outline-offset: -1 * $spacing-2
      margin: $spacing-2 0

      &:first-child
        margin-top: 0

      &:last-child
        margin-bottom: 0

    &--theme-2
      @extend .box__section
      background-color: $box-2-section-bg
      outline: $box-2-outline solid $spacing-2
      outline-offset: -1 * $spacing-2
      margin: $spacing-2 0

      &:first-child
        margin-top: 0

      &:last-child
        margin-bottom: 0

  &__heading
    @extend .box
    @extend .title
    padding: 0 $spacing-2 $spacing-2 $spacing-2

    &--theme-1
      @extend .box__heading
      background-color: $box-1-heading-bg

    &--theme-2
      @extend .box__heading
      background-color: $box-2-heading-bg
      font-size: small
      font-weight: normal

  &__content
    @extend .box
    padding: $spacing-4

    &--theme-1
      @extend .box__content
      color: $black
      background-color: $box-1-section-bg

    &--theme-2
      @extend .box__content
      color: $black
</style>
