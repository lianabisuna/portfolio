<template>
  <v-app-bar
    fixed
    flat
    height="100"
    dark
    color="transparent"
    class="wrapper"
    @click="toggle=!toggle"
  >
    <div
      v-if="showLogo"
      class="d-flex align-center"
    >
      <h2>LIANA</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      icon
    >
      <v-icon size="30">mdi-email-outline</v-icon>
    </v-btn>

    <v-btn
      icon
    >
      <v-icon size="27">mdi-square</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',

    props: {
      showLogo: { type: Boolean, default: false }
    },

    computed: {
      toggle: {
        get() { return this.$store.getters['main/toggle'] },
        set(val) { this.$store.commit('main/setToggle', val) }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-left: 10%;
    padding-right: 10%;
  }
</style>