<template>
  <div
    id="contact-link"
    :class="[
      drk&&background?'background-dark':'',
      grn&&background?'background-green':'',
      pnk&&background?'background-pink':'' ]"
    >
    <div :class="[ 'section d-flex align-center justify-center', { 'mx-5':sm } ]" style="min-height: 300px;">
      <component :is="component"></component>
    </div>
  </div>
</template>

<script>
  import Link1 from './contact-link/Link1';
  import Link2 from './contact-link/Link2';

  export default {
    name: 'ContactLink',

    props: {
      background: { type: Boolean, default: false },
      number: { type: [Number, String], default: 1 }
    },

    components: {
      Link1,
      Link2
    },

    computed: {
      component() {
        return `Link${this.number}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .background-dark {
    background: linear-gradient(to right, #689727, #eb663e);
  }

  .background-green {
    background: linear-gradient(to right, #22c1c3, #fdbb2d);
  }

  .background-pink {
    background: linear-gradient(to right, #7927b2, #fb3182);
  }
</style>