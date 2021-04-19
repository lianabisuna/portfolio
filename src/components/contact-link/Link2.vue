<template>
  <v-row class="border-design mx-auto">
    <v-col cols="12" class="text-center">
      <div class="title-caption">Need a developer?</div>
    </v-col>

    <v-col cols="12">
      <div class="d-flex justify-center">
        <v-hover v-slot="{ hover }">
          <div :class="[ 'bottom-line d-inline-block', { 'title-large':lg, 'title-small':sm} ]">
            <span :class="{ 'text-gradient':hover }">Let's collaborate</span><span v-if="!hover">.</span>
            <v-icon v-if="hover" x-large right dark>mdi-arrow-right</v-icon>
          </div>
        </v-hover>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Link2'
  }
</script>

<style lang="scss" scoped>
  .bottom-line:hover {
    border-bottom: 5px solid white;
  }

  .border-design {
    border: 1px solid white;
    padding-top: 5%;
    padding-bottom: 5%;
  }
</style>