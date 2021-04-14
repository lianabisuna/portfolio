export default ({
  namespaced: true,
  
  state: {
    toggle: false
  },

  getters: {
    toggle: state => state.toggle
  },

  mutations: {
    setToggle(state, value) {
      state.toggle = value;
    }
  },
  
  actions: {
    //
  }
})