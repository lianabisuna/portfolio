<template>
  <div>
    <div :class="[ 'section', { 'mx-5':sm } ]" style="height: 900px;">
      <h1>Work</h1>
    </div>

    <slot name="pagination"></slot>

    <slot name="link"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Work'
  }
</script>

<style lang="scss" scoped>

</style>