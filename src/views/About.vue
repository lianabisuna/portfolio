<template>
  <div>
    <div
      :class="[{ 'bg-cover':sm, 'bg-contain':lg }, 'banner' ]"
      :style="{ backgroundImage: 'url(' + require(`@/assets/about-${drk?'light':'dark'}.png`) + ')' }"
    >
      <div class="inner-wrapper">
        <div class="d-flex align-center justify-center">
          <v-btn
            absolute
            icon
            dark
            x-large
            class="pulse scroll-bottom"
            @click="scrollToId('content')"
            style="z-index: 1;"
          >
            <v-icon :color="drk?'white':'#141318'">mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <slot name="content"></slot>

    <div :class="[ 'section', { 'mx-5':sm } ]">
      <!-- About -->
      <div class="mb-section">
        <div class="paragraph text-justify">
          <p><span class="paragraph-1">Welcome!</span> You can call me <span class="paragraph-3">Yana</span>, short for <span class="paragraph-3">Liana Bianca Bisuña</span>. I'm <span class="font-weight-bold">22</span>, I live and work in the <span class="font-weight-bold">Philippines</span>. I attended University of Makati to learn Information Technology. You can visit my blog to know more on about my programming journey and <span class="font-weight-bold">how I became a developer</span>.</p>

          <p class="mt-10">Now, I'm a <span class="paragraph-3">front-end developer</span> who loves building <span class="font-weight-bold">websites</span> and <span class="font-weight-bold">web apps</span>. Most of these days, I've been building with <span class="paragraph-2">Vue</span> and exploring different <span class="font-weight-bold">design frameworks</span> like <span class="font-weight-bold">Tailwind</span> and <span class="font-weight-bold">Vuetify</span>. I also like to put grammar, symmetry and minimalism as essential part in most of my creations.

          <p class="mt-10"><span class="paragraph font-weight-bold">I'm currently interested in learning more about API integration and delving deeper into mobile responsiveness.</span> Aside from programming, I'm also doing makeup and learning from famous beauty gurus' creations. I stay fit through my childhood exercise tools: bicycle, jumping rope and hulahoop. I’m also a low-rank League of Legends player—but plays anyway.</p>

          <p>Let's start building!</p>

          <v-img
            :src="require(`@/assets/signature-${drk?'light':'dark'}.png`)"
            alt="signature"
            width="150"
            class="mt-10"
          ></v-img>
        </div>
      </div>

      <!-- Skills -->
      <div class="mb-section">
        <h1 class="text-uppercase mb-10">Skills</h1>

        <v-row>
          <v-col
            cols="12" sm="12" md="6" lg="6" xl="6"
            v-for="skill in skills"
            :key="skill.category"
          >
            <div class="paragraph-3 mb-3">{{ skill.category }}</div>
            <div
              v-for="item in skill.items"
              :key="item"
              class="paragraph"
            >
              {{ item }}
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Experience -->
      <div class="">
        <h1 class="text-uppercase mb-10">Experience</h1>

        <v-card
          tile
          flat
          color="transparent"
          v-for="(exp,key) in experiences"
          :key="key"
          :class="key+1!==experiences.length?'mb-10':''"
        >
          <div class="px-5" :style="{ borderLeft:`10px solid ${exp.color} !important`, marginLeft: `${lg?key:''}vw` }">
            <div class="pt-0 paragraph-3">{{ exp.company }}, {{ exp.role}}</div>
            <div class="title-caption mb-3">{{ exp.date }}</div>
            <component :is="exp.component"></component>
          </div>
        </v-card>
      </div>

      <!-- Resume -->
      <div class="my-10 py-10">
        <div class="d-flex justify-center mt-10">
          <v-hover v-slot="{ hover }">
            <div class="d-flex align-center" style="min-height: 60px;">
              <div v-if="hover" class="text-center">
                <span class="title-caption mr-3" style="color: var(--app-accent-color);">Download</span>
                <a
                  v-for="(button,key) in buttons"
                  :key="key"
                  :href="button.link"
                  target="_blank"
                  :class="key+1!==buttons.length?'mr-3':''"
                >
                  <v-text-button :name="button.name"></v-text-button>
                </a>
              </div>
              <v-btn
                v-else
                :disabled="hover"
                tile
                outlined
                :dark="drk"
                x-large
              >
                Resume
                <v-icon right>mdi-download</v-icon>
              </v-btn>
            </div>
          </v-hover>
        </div>
      </div>
    </div>

    <slot name="pagination"></slot>

    <slot name="link"></slot>
  </div>
</template>

<script>
  import behaviorMixin from '@/mixins/behavior';
  import ExpFourello from '@/components/experience/Fourello';
  import ExpJohnsons from '@/components/experience/Johnsons';
  import ExpComelec from '@/components/experience/Comelec';

  export default {
    name: 'About',

    mixins: [
      behaviorMixin
    ],

    components: {
      ExpFourello,
      ExpJohnsons,
      ExpComelec
    },

    data: () => ({
      skills: [
        { category: 'Language', items: [ 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'jQuery' ] },
        { category: 'Framework', items: [ 'VueJS', 'Vuetify', 'Tailwind', 'CodeIgniter' ] },
        { category: 'Tool & System', items: [ 'Git', 'NPM', 'Visual Studio Code', 'MySQL' ] },
        { category: 'Graphic/Design', items: [ 'Photoshop CS6', 'Blender 3D' ] } // BS Design Studio, Adobe XD
      ],
      experiences: [
        {
          company: 'Fourello',
          role: 'Frontend Developer',
          logo: 'fourello',
          color: '#615643',
          full_name: 'Fourello Ltd. Co.',
          address: 'Pines St., Mandaluyong City, Philippines',
          date: 'September 2020 - March 2021',
          component: 'ExpFourello'
        },
        {
          company: 'Johnsons Berkshire',
          role: 'Fullstack Developer Intern',
          logo: 'jbsi',
          color: '#ffffff',
          full_name: 'Johnsons Berkshire Solutions Inc.',
          address: 'Unit 804, 8th floor, Eco Tower Building, 32nd street corner 9th avenue, BGC, Taguig City Philippines',
          date: 'November 2019 - April 2020',
          component: 'ExpJohnsons'
        },
        {
          company: 'COMELEC',
          role: 'Technical Support',
          logo: 'comelec',
          color: '#1D507D',
          full_name: 'Commission on Elections',
          address: 'Pio Del Pilar Elementary School',
          date: 'May 9 - 13, 2019',
          component: 'ExpComelec'
        }
      ],
      buttons: [
        { name: 'pdf', link: 'https://drive.google.com/file/d/1M2oTjCfGUI_bbaYsyvbIr5NiRZi5SEsz/view?usp=sharing' },
        { name: 'jpg', link: 'https://drive.google.com/file/d/1ZKmFAXzHYcwkwoVKEsLTTy2aZI69zixO/view?usp=sharing' },
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
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