import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "./plugins/globalComponent";

Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.interceptors.request.use(function (config) {
  const token = `JWT ${localStorage.getItem("access")}`;
  config.headers.Authorization = token;

  return config;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
