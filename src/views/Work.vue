<template>
  <div>
    <div :class="[{ 'bg-cover':sm, 'bg-contain':lg }, 'banner' ]">
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
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <slot name="content"></slot>

    <div :class="[ 'section', { 'mx-5':sm } ]">
      <h1 class="text-uppercase">Website</h1>
      <div class="title-caption mt-2">selected projects</div>
    </div>

    <slot name="pagination"></slot>

    <slot name="link"></slot>
  </div>
</template>

<script>
  import behaviorMixin from '@/mixins/behavior';

  export default {
    name: 'Work',

    mixins: [
      behaviorMixin
    ]
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
    background-image: url('~@/assets/about.png');
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