<template>
  <div @click="toggleOnClick">
    <v-footer
      :fixed="float||target"
      :height="float||target?'100':'150'"
      color="transparent"
      :class="{ 'mx-1':sm, 'wrapper':lg }"
      v-scroll.parent="scrollListener"
    >
      <v-row no-gutters align="center">
        <v-col cols="10" sm="10" md="4" lg="4" xl="4">
          <v-btn
            v-if="float||target"
            icon
            x-large
          >
            <v-icon size="30" :color="drk?'white':'black'">mdi-web</v-icon>
          </v-btn>

          <h4 v-else :class="[ 'text-uppercase', { 'text-90':sm } ]">
            <a
              v-for="(icon,key) in icons"
              :key="key"
              :href="icon.link"
              :class="[ key+1!==icons.length?'mr-2':'' ]"
              target="_blank"
            >
              {{ icon.name }}
            </a>
          </h4>
        </v-col>

        <v-col cols="2" sm="2" md="4" lg="4" xl="4" :class="[ { 'text-center':lg, 'text-end':sm } ]">
          <v-btn
            v-if="!target&&!float"
            icon
            x-large
            @click="scrollToTop"
          >
            <v-icon :color="drk?'white':'black'">mdi-chevron-up</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="4" md="4" lg="4" xl="4" :class="[ { 'text-end':lg, 'text-center':sm } ]">
          <a :href="`mailto:${email}`">
            <h4 v-if="!target&&!float">lianabisuna@gmail.com</h4>
          </a>
          <div
            v-if="!target&&!float"
            class="text-caption"
          >
            {{ new Date().getFullYear() }} &copy; DESIGNED & CREATED BY LIANA BISUÑA
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
  import behaviorMixin from '@/mixins/behavior';

  export default {
    name: 'Footer',

    mixins: [
      behaviorMixin
    ],

    data: () => ({
      email: 'lianabisuna@gmail.com',
      target: true,
      icons: [
        { name: 'github', link: 'https://github.com/cunejoe' },
        { name: 'linkedin', link: 'https://linkedin.com/in/lianabisuna' },
        { name: 'instagram', link: 'https://www.instagram.com/codestring' }
      ],
    }),

    props: {
      float: { type: Boolean, default: false }
    },

    computed: {
      toggle: {
        get() { return this.$store.getters['main/toggle'] },
        set(val) { this.$store.commit('main/setToggle', val) }
      }
    },

    methods: {
      toggleOnClick() {
        if (this.sm)
          this.toggle = !this.toggle;
      },
      scrollListener() {
        /* user has scrolled to bottom */
				// if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
				// 	this.bottom = true;
        //   return; 
				// }

        // this.bottom = false;

        // return;

        /* user has scrolled on specific div */
        var elementTarget = document.getElementById("contact-link");
        var target = elementTarget.offsetTop + elementTarget.offsetHeight;
        var targetHeight = target - (target/2);
        var scrollHeight = window.scrollY

        if (targetHeight >= scrollHeight) {
          this.target = true;
          return;
        }

        this.target = false

        return;
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