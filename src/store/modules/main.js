export default ({
  namespaced: true,
  
  state: {
    toggle: false,
    theme: localStorage.getItem('theme') || ''
  },

  getters: {
    toggle: state => state.toggle,
    theme: state => state.theme
  },

  mutations: {
    setToggle(state, value) {
      state.toggle = value;
    },
    setTheme(state, value) {
      state.theme = value;
      localStorage.setItem('theme', value);
    }
  },
  
  actions: {
    //
  }
})