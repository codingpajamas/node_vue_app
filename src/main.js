import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'

// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  router,	
  render: h => h(App),
}).$mount('#app')
