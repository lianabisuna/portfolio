<template>
  <div>
    <div :class="[ 'section', { 'mx-5':sm } ]">
      <v-row>
        <v-col cols="6" class="text-start">
          <router-link v-if="Object.keys(prev).length !== 0" :to="prev.link">
            <div>← <span class="bottom-line-border text-capitalize">{{ prev.name }}</span></div>
          </router-link>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="6" class="text-end">
          <router-link v-if="Object.keys(next).length !== 0" :to="next.link">
            <div><span class="bottom-line-border text-capitalize">{{ next.name }}</span> →</div>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',

    data: () => ({
      routes: {
        home: { name: 'home', link: '/' },
        about: { name: 'about', link: '/about' },
        work: { name: 'work', link: '/work' },
        blog: { name: 'blog', link: '/blog' }
      }
    }),

    computed: {
      route() { return this.$route.name },
      prev() {
        var link = {};
        switch(this.route) {
          case 'About':
            link = this.routes.blog
            break;
          case 'Work':
            link = this.routes.home;
            break;
          case 'Blog':
            link = this.routes.work;
            break;
          default:
            break;
        }

        return link;
      },
      next() {
        var link = {};
        switch(this.route) {
          case 'About':
            // link = this.routes.home
            break;
          case 'Work':
            link = this.routes.blog;
            break;
          case 'Blog':
            link = this.routes.about;
            break;
          default:
            break;
        }

        return link;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-line-border {
    padding-bottom: 3px;
    border-bottom: 1px solid var(--app-font-color);
  }
</style>