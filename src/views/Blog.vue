<template>
  <div>
    <div
      :class="[{ 'bg-cover':sm, 'bg-contain':lg }, 'banner' ]"
      :style="{ backgroundImage: 'url(' + require(`@/assets/about-${drk?'light':'dark'}.png`) + ')' }"
    >
      <div class="inner-wrapper">
        <div class="d-flex align-center justify-center">
          <v-btn
            absolute
            icon
            dark
            x-large
            class="pulse scroll-bottom"
            @click="scrollToId('content')"
          >
            <v-icon :color="drk?'white':'black'">mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <slot name="content"></slot>

    <div :class="[ 'section', { 'mx-5':sm } ]" style="height: 900px;">
      <div class="display-2 font-weight-bold">Blog</div>

      <div></div>
    </div>

    <slot name="pagination"></slot>

    <slot name="link"></slot>
  </div>
</template>

<script>
  import behaviorMixin from '@/mixins/behavior';

  export default {
    name: 'Blog',

    mixins: [
      behaviorMixin
    ]
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
    background-position: center;
  }

  .inner-wrapper {
    position: relative;
    height: 100vh;
  }

  .scroll-bottom {
    bottom: 25px;
    z-index: 999;
  }
</style>