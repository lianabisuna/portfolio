<template>
  <v-app>
    <page-header :show-logo="!home"></page-header>
    
    <v-main>
      <router-view>
        <div slot="content" id="content"></div>
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
  $app-font-title: 'Neue Haas Grotesque Display Bold';
  $app-font-regular: 'Neue Haas Grotesque Text Medium';

  @font-face {
    font-family: Neue Haas Grotesque Text Medium;
    src: url('./assets/font/NHaasGroteskTXPro-65Md.otf') format("opentype");
  }

  @font-face {
    font-family: Neue Haas Grotesque Display Bold;
    src: url('./assets/font/NHaasGroteskDSPro-75Bd.otf') format("opentype");
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

  .title-caption {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bold;
    color: #92959A;
  }

  .title-mini {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 500;
    color: #92959A;
  }

  .text-large {
    font-size: 4.5em;
    font-family: $app-font-title;
  }

  .text-outline {
    -webkit-text-stroke: 2px white;
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

  .text-40 {
    font-size: 60%;
  }

  .text-90 {
    font-size: 90%;
  }

  .letter-spacing-3 {
    letter-spacing: 3px;
  }

  .line-height-1 {
    line-height: 1.6;
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

  .mb-section {
    margin-bottom: 20vh;
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

  .rotate-90 {
    transform: rotate(90deg);
  }

  /* Float */
  .hvr-float {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-float:hover, .hvr-float:focus, .hvr-float:active {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
</style>