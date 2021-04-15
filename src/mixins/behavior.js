export default {
  methods: {
    scrollToId(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
};