<template>
  <v-menu
    absolute
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <div
          :class="`pa-0 theme-box active-theme theme-${theme}`"
        ></div>
      </v-btn>
    </template>

    <v-list
      dense
      elevation="0"
      color="grey lighten-1"
    >
      <v-list-item
        v-for="(item, index) in themes"
        :key="index"
      >
        <div
          :class="`theme-box theme-${item} ${activeTheme(item)}`"
          @click="changeTheme(item)"
        ></div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'Theme',

    data: () => ({
      colors: ['dark', 'green', 'pink']
    }),

    computed: {
      themes() {
        return this.colors.filter(c => c !== this.theme)
      }
    },

    methods: {
      changeTheme(value) {
        let htmlElement = document.documentElement;
        this.$store.commit('main/setTheme', value)
        htmlElement.setAttribute('theme', value);
      },
      activeTheme(item) {
        return item == this.theme ? 'active-theme' : '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .theme {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50px;
    min-width: 120px;
  }

  .theme-box {
    width: 22px;
    height: 22px;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 5px;
    border: 3px solid var(--app-accent-color);
  }

  .theme-box:hover, .active-theme {
    cursor: pointer;
    border-color: var(--app-accent-color);
  }

  .theme-dark {
    background-color: #000000;
  }

  .theme-green {
    background-color: #588061;
  }

  .theme-pink {
    background-color: #fab7ae;
  }
</style>