<template>
  <v-hover v-slot="{ hover }">
    <a :href="project.site" target="_blank">
      <v-card
        height="500"
        tile
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

              <div class="line-height-1">
                <h2 class="white--text">{{ project.name }}</h2>
                <h3 class="white--text">{{ project.caption }}</h3>
              </div>
            </div>

            <div
              v-if="hover"
              class="ma-5"
            >
              <a :href="project.site" target="_blank">
                <v-text-button
                  v-if="project.site"
                  name="site"
                  prefix="visit"
                  class="mr-3"
                  color="white"
                ></v-text-button>
              </a>

              <a :href="project.code" target="_blank">
                <v-text-button
                  v-if="project.code"
                  name="code"
                  prefix="view"
                  class="mr-3"
                  color="white"
                ></v-text-button>
              </a>

              <v-text-button
                v-if="project.component"
                name="more"
                prefix="learn"
                color="white"
              ></v-text-button>
            </div>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </a>
  </v-hover>
</template>

<script>
  export default {
    name: 'PortraitCard',

    props: {
      project: { type: Object, default:()=>{} }
    }
  }
</script>

<style lang="scss" scoped>

</style>