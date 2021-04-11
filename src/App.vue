<template>
  <v-app>
    <page-header :show-logo="!home"></page-header>
    
    <v-main>
      <router-view></router-view>
    </v-main>

    <page-footer :float="home"></page-footer>
  </v-app>
</template>

<script>
  import PageFooter from './components/Footer';
  import PageHeader from './components/Header';

  export default {
    name: 'App',

    components: {
      PageFooter,
      PageHeader
    },

    computed: {
      home() { return this.$route.name == 'Home' }
    },

    data: () => ({
      //
    }),
  };
</script>

<style lang="scss">
  #app {
    color: white;
    background-color: black;
  }

  .text-large {
    font-size: 100px;
  }

  .text-medium {
    font-size: 65px;
  }
</style>