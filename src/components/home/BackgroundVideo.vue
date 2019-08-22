<template>
  <video
    playsinline
    autoplay
    muted
    loop
    poster
    id="bgvid"
    style="  object-fit: cover; width: 100vw;height: 100vh;position: fixed;top: 0;left: 0; padding: 0"
  >
    <source src="/img/nebula.mp4" type="video/mp4" />
  </video>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="sass">
video
  object-fit: cover
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
</style>