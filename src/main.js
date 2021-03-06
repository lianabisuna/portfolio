import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
/* Mixins */
import screenMix from './mixins/screen';
import settingsMix from './mixins/settings';
/* Autoload Base Components */
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

/* Mixins */
Vue.mixin(screenMix);
Vue.mixin(settingsMix);

/* Autoload Base Components */
// first param: destination
// second param: whether or not to look in subfolders
// third param: the regular expression used to match base component filenames
const requireComponent = require.context(
  "./components",
  false,
  /V[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);
  // Get PascalCase name of component
  const componentName = upperFirst(
    // Gets the file name regardless of folder depth
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
