<template>
  <v-row align="center" justify="center">
    <v-col sm="12" md="6" lg="6" xl="6" class="text-center">
      <h1>Need a developer?</h1>
    </v-col>

    <v-col sm="12" md="6" lg="6" xl="6" class="text-center">
      <v-btn
        tile
        outlined
        dark
        x-large
        @click="contact=true"
      >
        Let's collaborate
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Link1',

    computed: {
      contact: {
        get() { return this.$store.getters['main/contact'] },
        set(val) { this.$store.commit('main/setContact', val) }
      }
    }
  }
</script>