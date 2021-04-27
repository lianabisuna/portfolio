<template>
  <v-hover v-slot="{ hover }">
    <v-card
      height="200"
      tile
      dark
      @click="$router.push(project.link)"
    >
      <v-img
        height="100%"
        width="100%"
        :src="require(`@/assets/project/${project.image}.jpg`)"
        alt="project"
        bottom
      ></v-img>

      <v-fade-transition>
        <v-overlay
          absolute
          :color="hover?'black':'transparent'"
          class="align-start justify-start"
        >
          <div class="ma-5">
            <div :class="[ 'title-mini', hover?'white--text':'' ]">{{ project.year }}</div>

            <div :class="[ 'line-height-1 text-uppercase', hover?'white--text':'black--text' ]">
              <h2>{{ project.name }}</h2>
            </div>
          </div>
        </v-overlay>
      </v-fade-transition>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'LandscapeCard',

    props: {
      project: { type: Object, default:()=>{} }
    }
  }
</script>

<style lang="scss" scoped>

</style>