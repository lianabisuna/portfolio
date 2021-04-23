<template>
  <v-hover v-slot="{ hover }">
    <span
      :class="[ 'cursor-pointer font-weight-bold text-uppercase hvr-float', { 'underline':hover } ]"
      :style="{ borderColor:color, color:color }"
    >
      {{ value(hover) }}
    </span>
  </v-hover>
</template>

<script>
  export default {
    name: 'VTextButton',

    props: {
      name: { type: String, default: '' },
      prefix: { type: String, default: '' },
      suffix: { type: String, default: '' },
      color: { type: String, default: 'white' },
    },

    methods: {
      value(hover) {
        var name = this.name;
        if (hover)
          if (this.prefix)
            name = `${this.prefix} ${name}`;
          else if (this.suffix)
            name = `${name} ${this.suffix}`;
        return name;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .underline {
    border-bottom: 2px solid;
    padding-bottom: 3px;
  }
</style>