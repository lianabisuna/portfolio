<template>
  <div>
    <div :class="[{ 'bg-cover':sm, 'bg-contain':lg }, 'banner' ]">
      <div class="inner-wrapper">
        <div class="d-flex align-center justify-center">
          <v-btn
            absolute
            icon
            dark
            x-large
            class="pulse scroll-bottom"
            @click="scrollToId('content')"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <slot name="content"></slot>

    <div :class="[ 'section', { 'mx-5':sm } ]">
      <h1 class="text-uppercase">Web Project</h1>
      <div class="title-caption mt-2 mb-10">templates, sites & apps</div>

      <v-row class="mb-10">
        <v-col
          cols="12" sm="6" md="6" lg="6" xl="6"
          v-for="project in projects"
          :key="project.name"
        >
          <portrait-card
            :project="project"
          ></portrait-card>
        </v-col>
      </v-row>

      <h1 class="text-uppercase">Graphic Creation</h1>
      <div class="title-caption mt-2 mb-10">logos, vectors & cards</div>

      <h1 class="text-uppercase">Featured on Instagram</h1>
      <div class="title-caption mt-2 mb-10">
        follow me 
        <a href="https://www.instagram.com/codestring" target="_blank" class="white--text">
          @codestring
        </a>
      </div>
    </div>

    <slot name="pagination"></slot>

    <slot name="link"></slot>
  </div>
</template>

<script>
  import behaviorMixin from '@/mixins/behavior';
  // import LandscapeCard from '@/components/project-card/Landscape';
  import PortraitCard from '@/components/project-card/Portrait';

  export default {
    name: 'Work',

    mixins: [
      behaviorMixin
    ],

    components: {
      // LandscapeCard,
      PortraitCard
    },

    data: () => ({
      projects: [
        {
          name: 'Spelltacular',
          caption: 'random word spelling quiz for kids',
          year: '2019',
          image: "spelltacular",
          site: 'https://spelltacular.netlify.app',
          code: '',
          component: ''
        },
        {
          name: "Summoner's Fate",
          caption: 'league rift role selection quiz',
          year: '2019',
          image: "summoners-fate",
          site: 'https://summoners-fate.netlify.app',
          code: '',
          component: ''
        },
        {
          name: 'K! Card',
          caption: 'university identification card mockup',
          year: '2020',
          image: "kcard",
          site: 'https://kcard.netlify.app',
          code: '',
          component: ''
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
    background-image: url('~@/assets/about.png');
    background-position: center;
  }

  .inner-wrapper {
    position: relative;
    height: 100vh;
  }

  .scroll-bottom {
    bottom: 25px;
    z-index: 999;
  }
</style>