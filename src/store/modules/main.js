export default ({
  namespaced: true,
  
  state: {
    toggle: false,
    theme: localStorage.getItem('theme') || '',
    contact: false
  },

  getters: {
    toggle: state => state.toggle,
    theme: state => state.theme,
    contact: state => state.contact
  },

  mutations: {
    setToggle(state, value) {
      state.toggle = value;
    },
    setTheme(state, value) {
      state.theme = value;
      localStorage.setItem('theme', value);
    },
    setContact(state, value) {
      state.contact = value;
    },
  },
  
  actions: {
    //
  }
})