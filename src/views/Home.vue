<template>
  <div
    @click="changeSubtitle"
    class="home d-flex align-center justify-center cursor-pointer"
  >
    <div>
      <div class="text-large d-flex text-uppercase">
        <v-hover
          v-for="(title, key) in titles"
          :key="key"
          v-slot="{ hover }"
        >
          <router-link :to="`/${title.link}`">
            <div
              :class="[
                'cursor-pointer',
                key+1!==titles.length?'mr-5':'',
                hover?`d-${title.color}`:''
              ]"
            >
              {{ hover?title.link:title.text }}
            </div>
          </router-link>
        </v-hover>
      </div>

      <div class="text-medium text-center">
        <div>{{ subtitles[subtitle] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

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
      { text: 'hello', link: 'about', color: 'green' },
      { text: "i am", link: 'work', color: 'pink' },
      { text: 'liana', link: 'blog', color: 'purple' }
    ]
  }),
  
  components: {
    // HelloWorld
  },

  methods: {
    changeSubtitle() {
      this.subtitle+1 !== this.subtitles.length
        ? this.subtitle++
        : this.subtitle = 0
    }
  }
}
</script>

<style>
  .home {
    height: 100vh;
  }
</style>