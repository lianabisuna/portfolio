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
      <!-- About -->
      <div class="mb-section">
        <!-- <div class="display-2 font-weight-bold">About</div> -->

        <div>
          <p class="paragraph mt-10">I'm a <span class="paragraph-3">front-end developer</span> who loves building <span class="paragraph-2">websites</span> and <span class="paragraph-2">web apps</span>, enjoys <span class="paragraph-1">writing</span> blogs and likes <span class="paragraph-1">designing</span> logos. Most of these days, I've been building mini web apps with <span class="paragraph-3">Vue</span> and exploring different <span class="paragraph-3">design frameworks</span> like <span class="font-weight-bold">Tailwind</span> and <span class="font-weight-bold">Vuetify</span>. I also like to put grammar, symmetry and minimalism as essential part in most of my creations. I also share dev experiences and insert some of my <span class="font-weight-bold">graphic designs</span> through creating digital content.</p>

          <p class="paragraph mt-10"><span class="paragraph font-weight-bold">I'm currently interested in learning more about API integration and delving deeper into mobile responsiveness.</span> Aside from programming, I'm also doing makeup and learning from famous beauty gurus' creations. I stay fit through my childhood exercise tools: bicycle, jumping rope and hulahoop. I’m also a low-rank League of Legends player—but plays anyway.</p>
        </div>

        <div class="d-flex justify-center mt-10">
          <v-hover v-slot="{ hover }">
            <div class="d-flex align-center" style="min-height: 60px;">
              <div v-if="hover" class="text-center">
                <span class="title-caption mr-3 grey--text">Download</span>
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
                dark
                x-large
              >
                Resume
                <v-icon right>mdi-download</v-icon>
              </v-btn>
            </div>
          </v-hover>
        </div>
      </div>

      <!-- Experience -->
      <div class="mb-section">
        <h1 class="text-uppercase mb-10">Experience</h1>

        <v-card
          dark
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
            <div class="pb-0 paragraph">{{ exp.caption }}</div>
          </div>
        </v-card>
      </div>

      <!-- Skills -->
      <div>
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
    </div>

    <slot name="pagination"></slot>

    <slot name="link"></slot>
  </div>
</template>

<script>
  import behaviorMixin from '@/mixins/behavior';

  export default {
    name: 'About',

    mixins: [
      behaviorMixin
    ],

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
          caption: 'Participated in the development of Synchrony: A Virtual Family Day, Medgate Corporate Wesbite and Medgate System/Portal'
        },
        {
          company: 'Johnsons Berkshire',
          role: 'Fullstack Developer',
          logo: 'jbsi',
          color: '#ffffff',
          full_name: 'Johnsons Berkshire Solutions Inc.',
          address: 'Unit 804, 8th floor, Eco Tower Building, 32nd street corner 9th avenue, BGC, Taguig City Philippines',
          date: 'November 2019 - April 2020',
          caption: 'Pioneered in design and development of a School Management System along with two co-developers'
        },
        {
          company: 'COMELEC',
          role: 'Technical Support',
          logo: 'comelec',
          color: '#1D507D',
          full_name: 'Commission on Elections',
          address: 'Pio Del Pilar Elementary School',
          date: 'May 9 - 13, 2019',
          caption: 'Assisted the Electoral Board in the installation and operation of the Vote Counting Machine. Performed basic troubleshooting and provided solution in case of system defect. Reported to the NTSC all the events in the National Election 2019.'
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