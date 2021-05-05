<template>
  <v-app-bar
    fixed
    flat
    :class="{ 'mx-1':sm, 'wrapper':lg }"
    color="transparent"
    @click="toggleOnClick"
    v-scroll.parent="scrollListener"
    :height="expand&&showLogo?'200':'100'"
  >
    <div
      v-if="showLogo"
      class="d-flex align-center"
    >
      <router-link to="/">
        <v-img
          :src="require(`@/assets/logo-${drk?'light':'dark'}.png`)"
          alt="logo"
          :width="expand?'100':'50'"
          :height="expand?'100':'50'"
          absolute
          fixed
        ></v-img>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <contact-form></contact-form>

    <page-theme></page-theme>
  </v-app-bar>
</template>

<script>
  import PageTheme from './Theme';
  import ContactForm from './Contact';

  export default {
    name: 'Header',

    props: {
      showLogo: { type: Boolean, default: false }
    },

    components: {
      PageTheme,
      ContactForm
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
      toggleOnClick() {
        if (this.sm)
          this.toggle = !this.toggle;
      },
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