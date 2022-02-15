import Vue from 'vue'
import store from "./vuex/store.js";
import router from "../router/router.js"
import App from "@/components/App";
import '@/assets/sass/app.scss'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h(App)
});
app.$mount('#app');
