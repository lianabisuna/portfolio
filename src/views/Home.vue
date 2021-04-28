<template>
  <div
    class="home d-flex align-center justify-center overflow-y-hidden"
    @click="toggleOnClick"
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
                hover?textFloatColor(title.color):'',
                toggle&&(sm||md)?textFloatColor(title.color):'',
                { 'text-70 d-block':sm, 'd-inline-block':lg, 'd-inline-block':md },
                title.text=='liana'&&(!hover&&!toggle)?'text-outline':''
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
        { text: 'hello', link: 'work', color: 'a' },
        { text: "i am", link: 'blog', color: 'b' },
        { text: 'liana', link: 'about', color: 'c' }
      ]
    }),

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
      },
      textFloatColor(color) {
        return this.drk ? `text-gradient-${color}` : `text-float-${color}`;
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

  .text-float-a {
    color: var(--a-text-float-color);
  }

  .text-float-b {
    color: var(--b-text-float-color);
  }

  .text-float-c {
    color: var(--c-text-float-color);
  }

  .text-gradient-a {
    background: var(--a-text-float-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradient-b {
    background: var(--b-text-float-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradient-c {
    background: var(--c-text-float-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>