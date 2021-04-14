<template>
  <div @click="toggle=!toggle">
    <v-footer
      v-if="float"
      fixed
      color="transparent"
      dark
      height="100"
      style="padding-left: 10%; padding-right: 10%;"
    >
      <v-btn
        icon
        x-large
      >
        <v-icon size="30">mdi-web</v-icon>
      </v-btn>
    </v-footer>

    <v-footer
      v-else
      :class="{ 'mx-1':sm, 'wrapper':lg }"
      height="250"
      color="transparent"
    >
      <v-card
        dark
        flat
        color="transparent"
        width="100%"
        class="text-center paragraph-big"
      >
        <v-card-text>
          <a
            v-for="icon in icons"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
          >
            <v-btn
              x-large
              icon
            >
              <v-icon :size="icon.size">{{ icon.name }}</v-icon>
            </v-btn>
          </a>
        </v-card-text>

        <v-card-text class="white--text">
          <span class="text-uppercase">LET'S TALK @ </span>
          <a href="mailto:lianabisuna@gmail.com" class="text-decoration-underline">lianabisuna@gmail.com</a>
        </v-card-text>

        <v-card-text class="white--text text-uppercase">
          Designed & Built by <span class="font-weight-bold">Liana Bisuña</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      icons: [
        { name: 'mdi-github', link: 'https://github.com/cunejoe', size: '30' },
        { name: 'mdi-linkedin', link: 'https://linkedin.com/in/lianabisuna', size: '33' },
        { name: 'mdi-instagram', link: 'https://www.instagram.com/codestring', size: '30' }
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
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-left: 10%;
    padding-right: 10%;
  }
</style>