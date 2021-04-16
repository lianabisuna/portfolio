<template>
  <v-app>
    <page-header :show-logo="!home"></page-header>
    
    <v-main>
      <router-view>
        <pagination
          v-if="!home"
          slot="pagination"
        ></pagination>
        <contact-link
          v-if="!home"
          slot="link"
          :background="link.background"
          :number="link.number"
        ></contact-link>
      </router-view>
    </v-main>

    <page-footer :float="home"></page-footer>
  </v-app>
</template>

<script>
  import PageFooter from './components/Footer';
  import PageHeader from './components/Header';
  import Pagination from './components/Pagination';
  import ContactLink from './components/ContactLink';

  export default {
    name: 'App',

    components: {
      PageFooter,
      PageHeader,
      Pagination,
      ContactLink
    },

    computed: {
      home() { return this.$route.name == 'Home' },
      link() {
        var number = Math.ceil(Math.random()*2);
        return {
          background: number==1?true:false,
          number: number
        }
      }
    }
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

  .title-large {
    font-size: 3.5em;
    font-family: $app-font-title;
  }

  .title-medium {
    font-size: 2.5em;
    font-family: $app-font-title;
  }

  .title-small {
    font-size: 2em;
    font-family: $app-font-title;
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

  .letter-spacing-3 {
    letter-spacing: 3px;
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

  .section {
    max-width: 700px;
    margin: 10% auto;
  }

  .bg-contain {
    background-size: contain;
  }

  .bg-cover {
    background-size: cover;
  }

  .paragraph-big {
    font-size: 20px;
  }

  .paragraph {
    font-size: 20px;
  }

  .paragraph-1 {
    font-size: 21px;
    font-weight: 600;
  }

  .paragraph-2 {
    font-size: 22px;
    font-weight: 600;
  }

  .paragraph-3 {
    font-size: 23px;
    font-weight: 600;
  }
  
  // Pulse animation
  .pulse {
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    background: rgba(255,255,255, 0.1);
    box-shadow: 0 0 0 rgba(255,255,255, 0.4);
    animation: pulse 2s infinite;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(255,255,255, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0);
    }
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(255,255,255, 0.4);
      box-shadow: 0 0 0 0 rgba(255,255,255, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(255,255,255, 0);
      box-shadow: 0 0 0 10px rgba(255,255,255, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(255,255,255, 0);
      box-shadow: 0 0 0 0 rgba(255,255,255, 0);
    }
  }

  .text-gradient {
    background: linear-gradient(to right, #689727, #a65f56);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>