<template>
  <v-toolbar color="primary" absolute dense>
    <button class="stroke-button">
      <svg width="120px" height="40px" viewBox="0 0 120 40" class="border">
        <polyline points="119,1 119,39 1,39 1,1 119,1" class="bg-line" />
        <polyline points="119,1 119,39 1,39 1,1 119,1" class="hl-line" />
      </svg>
      <span>HOVER ME</span>
    </button>
    <v-spacer />
    <v-btn class="stroke-button" color="warning" text>
      <svg width="120px" height="40px" viewBox="0 0 120 40" class="border">
        <polyline points="119,1 119,39 1,39 1,1 119,1" class="bg-line" />
        <polyline points="119,1 119,39 1,39 1,1 119,1" class="hl-line" />
      </svg>
      lolly
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css?family=Lato:100&display=swap');

// body,
// html {
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   background: #5ca4ea;
//   overflow: hidden;
//   font-family: 'Lato', sans-serif;
// }

// .container {
//   width: 400px;
//   height: 400px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.center {
  width: 120px;
  height: 40px;
  position: absolute;
}

.stroke-button {
  width: 120px;
  height: 40px;
  cursor: pointer;
  background: transparent;
  // border: 1px solid #91c9ff;
  outline: none;
  transition: 1s ease-in-out;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.stroke-button:hover {
  transition: 1s ease-in-out;
  // background: #4f95da;
}

.stroke-button:hover svg {
  stroke-dashoffset: -480;
}

// .btn span {
//   color: white;
//   font-size: 18px;
//   font-weight: 100;
// }
</style>
