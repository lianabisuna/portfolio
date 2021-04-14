export default {
  computed: {
    screen() { return this.$vuetify.breakpoint },
    sm() { return this.screen.smAndDown }, // phone
    md() { return this.screen.md }, // tablet
    lg() { return this.screen.lgAndUp } // desktop
  }
};