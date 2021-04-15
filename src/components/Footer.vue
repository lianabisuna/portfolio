<template>
  <div @click="toggle=!toggle">
    <v-footer
      dark
      :fixed="float||target"
      height="100"
      color="transparent"
      :class="{ 'mx-1':sm, 'wrapper':lg }"
      v-scroll.parent="scrollListener"
    >
      <v-row no-gutters align="center">
        <v-col cols="4">
          <v-btn
            v-if="float||target"
            icon
            x-large
          >
            <v-icon size="30">mdi-web</v-icon>
          </v-btn>

          <h4 v-else class="text-uppercase">
            <router-link
              v-for="(icon,key) in icons"
              :key="key"
              :to="icon.link"
              :class="[ key+1!==icons.length?'mr-2':'' ]"
            >
              {{ icon.name }}
            </router-link>
          </h4>
        </v-col>

        <v-col cols="4" class="text-center">
          <v-btn
            v-if="!target&&!float"
            icon
            x-large
            @click="scrollToTop"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="4" class="text-end">
          <h4 v-if="!target&&!float">lianabisuna@gmail.com</h4>
          <h4 v-if="!target&&!float">DESIGNED & CREATED BY LIANA</h4>
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
      target: true,
      icons: [
        { name: 'git', link: 'https://github.com/cunejoe' },
        { name: 'in', link: 'https://linkedin.com/in/lianabisuna' },
        { name: 'ig', link: 'https://www.instagram.com/codestring' }
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