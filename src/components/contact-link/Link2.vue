<template>
  <v-row class="border-design mx-auto">
    <v-col cols="12" class="text-center">
      <div class="title-caption">Need a developer?</div>
    </v-col>

    <v-col cols="12">
      <div class="d-flex justify-center">
        <v-hover v-slot="{ hover }">
          <div
            @click="contact=true"
            :class="[
              'bottom-line d-inline-block cursor-pointer',
              { 'title-large':lg, 'title-small':sm}
            ]"
          >
            <span :class="{ 'text-gradient':hover }">
              Let's collaborate
            </span>
            <span v-if="!hover">.</span>
            <v-icon
              v-if="hover"
              x-large
              right
              :color="drk?'white':'black'"
            >
              mdi-arrow-right
            </v-icon>
          </div>
        </v-hover>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Link2',

    computed: {
      contact: {
        get() { return this.$store.getters['main/contact'] },
        set(val) { this.$store.commit('main/setContact', val) }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-line:hover {
    border-bottom: 5px solid var(--app-accent-color);
  }

  .border-design {
    border: 1px solid var(--app-font-color);
    padding-top: 5%;
    padding-bottom: 5%;
  }
</style>