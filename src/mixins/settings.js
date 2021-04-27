export default {
  computed: {
    theme() { return this.$store.getters['main/theme'] },
    drk() { return this.theme == 'dark' },
    grn() { return this.theme == 'green' },
    pnk() { return this.theme == 'pink' }
  }
};