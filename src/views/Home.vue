<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-col>
        <v-row>
          <v-img
            src="/img/planet-nacho-splash.png"
            contain
            min-height="35vh"
            max-height="50vh"
            style="bottom: 10vh"
          />
        </v-row>

        <!--        <div id="container">-->
        <!--          <div>-->
        <!--            Always be-->
        <!--          </div>-->
        <!--          <div id="flip">-->
        <!--            <div><div>kind</div></div>-->
        <!--            <div><div>flexible</div></div>-->
        <!--            <div><div>creative</div></div>-->
        <!--            <div><div>genuine</div></div>-->
        <!--            <div><div>friendly</div></div>-->
        <!--            <div><div>strategic</div></div>-->
        <!--            <div><div>confident</div></div>-->
        <!--            <div><div>adventurous</div></div>-->
        <!--          </div>-->
        <!--        </div>-->
      </v-col>
    </v-container>

    <v-container class="text-s">
      © 2021 Planet Nacho. All rights reserved.
      <a
        href="/policy"
        style="color:gray"
      >Legal Mumbo Jumbo</a>
    </v-container>
    </v-container>
  </v-content>
</template>

<script>

</script>

<style lang="sass" scoped>

#container
  color: #999
  text-transform: uppercase
  font-size: 36px
  font-weight: bold
  padding-top: 200px
  position: fixed
  width: 100%
  bottom: 45%
  display: block

#flip
  height: 50px
  overflow: hidden
  & > div
    & > div
      color: #fff
      padding: 4px 12px
      height: 45px
      margin-bottom: 45px
      display: inline-block
  div
    &:first-child
      animation: show 5s linear infinite
      div
        background: #4ec7f3
    div
      background: #42c58a
    &:last-child
      div
        background: #DC143C

@keyframes show
    0%
      margin-top: -270px
    5%
      margin-top: -180px
    33%
      margin-top: -180px
    38%
      margin-top: -90px
    66%
      margin-top: -90px
    71%
      margin-top: 0px
    100%
      margin-top: -270px

p
  position: fixed
  width: 100%
  bottom: 30px
  font-size: 12px
  color: #999
  margin-top: 200px

</style>
