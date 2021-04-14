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
  $app-font-title: 'Sequel Sans Bold Body';
  $app-font-regular: 'Sequel Sans Roman Body';

  @font-face {
    font-family: Sequel Sans Bold Body;
    src: url('./assets/font/Sequel Sans Bold Body.ttf') format("truetype");
  }

  @font-face {
    font-family: Sequel Sans Roman Body;
    src: url('./assets/font/Sequel Sans Roman Body.ttf') format("truetype");
  }

  #app {
    color: white;
    background: black;
    font-family: $app-font-regular;
  }

  .text-large {
    font-size: 4.5em;
    font-family: $app-font-title;
  }

  .text-medium {
    font-size: 3em;
    letter-spacing: 2px;
    font-family: $app-font-title;
  }

  .text-70 {
    font-size: 70%;
  }

  .text-40 {
    font-size: 60%;
  }

  .nowrap {
    white-space: nowrap ;
  }

  .cursor-pointer:hover {
    cursor: pointer;
  }

  .elevate {
    top: -10px;
  }

  .d-green {
    color: #8dc63f;
  }

  .d-pink {
    color: #fab7ae;
  }

  .d-purple {
    color: #8560a8;
  }

  a {
    text-decoration: none !important;
    color: inherit !important;
  }
</style>