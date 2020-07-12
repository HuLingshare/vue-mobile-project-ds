import Vue from "vue";
import "./assets/css/common.css";
import "./assets/fonts/iconfont.css";
import "./assets/js/ui.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/rem.js";

import FastClick from "fastclick";

Vue.config.productionTip = false;
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
