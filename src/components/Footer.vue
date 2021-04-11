<template>
  <div>
    <v-footer
      v-if="float"
      fixed
      color="transparent"
      dark
      height="100"
      style="padding-left: 10%; padding-right: 10%;"
    >
      <v-btn
        icon
        x-large
      >
        <v-icon size="30">mdi-web</v-icon>
      </v-btn>
    </v-footer>

    <v-footer v-else>
      <h1>Footer</h1>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',

    props: {
      float: { type: Boolean, default: false }
    }
  }
</script>