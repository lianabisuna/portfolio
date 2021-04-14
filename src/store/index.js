import Vue from "vue";
import Vuex from "vuex";
import main from './modules/main'

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  strict: true,
  modules: {
    main
  },
});

export default store;
