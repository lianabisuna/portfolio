<template>
  <v-app-bar
    fixed
    flat
    dark
    :class="{ 'mx-1':sm, 'wrapper':lg }"
    color="transparent"
    @click="toggle=!toggle"
    v-scroll.parent="scrollListener"
    :height="expand&&showLogo?'200':'100'"
  >
    <div
      v-if="showLogo"
      class="d-flex align-center"
    >
      <router-link to="/">
        <v-img
          src="@/assets/logo.png"
          :width="expand?'100':'50'"
          absolute
          fixed
        ></v-img>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      icon
    >
      <v-icon size="30">mdi-email-outline</v-icon>
    </v-btn>

    <v-btn
      icon
    >
      <v-icon size="27">mdi-square</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',

    props: {
      showLogo: { type: Boolean, default: false }
    },

    data: () => ({
      scrollPosition: 0,
      expand: true
    }),

    computed: {
      toggle: {
        get() { return this.$store.getters['main/toggle'] },
        set(val) { this.$store.commit('main/setToggle', val) }
      }
    },

    methods: {
      scrollListener() {
        let app = document.getElementsByTagName('html');

        this.scrollPosition = app[0].scrollTop;

				if (this.scrollPosition == 0) {
					this.expand = true;
					return;
				}

				this.expand = false;

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