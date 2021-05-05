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
    },

    created() {
      this.setDefaultTheme();
    },

    methods: {
      setDefaultTheme() {
        var theme = 'dark';
        if (this.theme) {
          switch (this.theme) {
            case 'dark':
              theme = 'dark';
              break;
            case 'green':
              theme = 'green';
              break;
            case 'pink':
              theme = 'pink';
              break;
            default:
              break;
          }
        }

        this.$store.commit('main/setTheme', theme);
        let htmlElement = document.documentElement;
        htmlElement.setAttribute('theme', theme);
      }
    }
  };
</script>

<style lang="scss">
  @import './scss/theme';

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
    color: var(--app-font-color);
    background: var(--app-background-color);
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
    color: var(--app-accent-color);
  }

  .title-mini {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 500;
    color: var(--app-accent-color);
  }

  .text-large {
    font-size: 4.5em;
    font-family: $app-font-title;
    color: var(--text-large-color);
  }

  .text-medium {
    font-size: 3em;
    letter-spacing: 2px;
    font-family: $app-font-title;
    color: var(--text-medium-color);
  }

  .text-outline {
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: var(--text-stroke-outer-color);
    color: var(--text-stroke-inner-color);
  }

  .text-70 {
    font-size: 70% !important;
  }

  .text-40 {
    font-size: 40% !important;
  }

  .text-90 {
    font-size: 90% !important;
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

  .paragraph-caption {
    font-size: 12px;
    color: var(--app-font-color);
  }

  .paragraph-big {
    font-size: 20px;
    color: var(--app-font-color);
  }

  .paragraph {
    font-size: 20px;
    color: var(--app-font-color);
  }

  .paragraph-1 {
    font-size: 21px;
    font-weight: 600;
    color: var(--app-font-color) !important;
  }

  .paragraph-2 {
    font-size: 22px;
    font-weight: 600;
    color: var(--app-font-color) !important;
  }

  .paragraph-3 {
    font-size: 23px;
    font-weight: 600;
    color: var(--app-font-color);
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