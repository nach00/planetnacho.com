<template>
  <v-container fluid fill-height class="pa-0">
    <CenterImage />
    <!-- <Button /> -->
  </v-container>
</template>

<script>
export default {
  name: "App",
  components: {
    CenterImage: () => import("@/components/home/CenterImage"),
    Button: () => import("@/components/home/Button")
  }
};
</script>

<style lang="sass" scoped></style>
