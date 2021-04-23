<template>
  <div
    class="home d-flex align-center justify-center overflow-y-hidden"
    @click="toggle=!toggle"
  >
    <div>
      <div :class="[ 'text-large text-uppercase', sm?'push-to-top':'' ]">
        <v-hover
          v-for="(title,key) in titles"
          :key="key"
          v-slot="{ hover }"
        >
          <router-link :to="titleLink(title.link)">
            <div
              :class="[
                'cursor-pointer hvr-float text-center',
                key+1!==titles.length&&(md||lg)?'mr-5':'',
                hover?`d-${title.color}`:'',
                toggle&&(sm||md)?`d-${title.color}`:'',
                { 'text-70 d-block':sm, 'd-inline-block':lg, 'd-inline-block':md },
                title.text=='liana'&&(!hover&&!toggle)?'text-outline black--text':''
              ]"
              @mouseenter="toggle=lg?true:toggle"
              @mouseleave="toggle=lg?false:toggle"
            >
              {{ titleText(hover, title.link, title.text) }}
            </div>
          </router-link>
        </v-hover>
      </div>

      <div
        class="subtitle text-medium text-center cursor-pointer"
        @click.stop="changeSubtitle"
      >
        <div :class="{ 'text-40 mt-5':sm }">{{ subtitles[subtitle] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      subtitle: 0,
      subtitles: [
        'DESIGNER & DEVELOPER',
        'FRONT-END DEVELOPER',
        '<CODE> WRITE. DESIGN;',
        'HTML, CSS & JAVASCRIPT'
      ],
      titles: [
        { text: 'hello', link: 'work', color: 'green' },
        { text: "i am", link: 'blog', color: 'pink' },
        { text: 'liana', link: 'about', color: 'purple' }
      ]
    }),

    computed: {
      toggle: {
        get() { return this.$store.getters['main/toggle'] },
        set(val) { this.$store.commit('main/setToggle', val) }
      }
    },

    methods: {
      changeSubtitle() {
        this.subtitle+1 !== this.subtitles.length
          ? this.subtitle++
          : this.subtitle = 0
      },
      titleText(hover, link, text) {
        if (this.sm || this.md)
          return this.toggle?link:text;
        else
          return hover?link:text;
      },
      titleLink(link) {
        if (this.sm || this.md)
          return this.toggle?`/${link}`:'/';
        else
          return `/${link}`;
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100vh;
  }

  .subtitle {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .push-to-top {
    margin-top: -50%;
  }
</style>