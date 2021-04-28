<template>
  <v-snackbar
    v-model="innerVal"
    top
    left
    tile
    light
    multi-line
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        icon
        v-bind="attrs"
        @click="innerVal=false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'VAlertMessage',

    props: {
      value: { type: Boolean, default: false },
      text: { type: String , default:'' }
    },

    data() {
      return {
        innerVal: this.value
      }
    },

    watch: {
      value(val) {
        this.innerVal = val
      },
      innerVal(val) {
        this.$emit('input', val)
      }
    }
  }
</script>