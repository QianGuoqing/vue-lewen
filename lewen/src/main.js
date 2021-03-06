// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import 'mint-ui/lib/style.css'
import './common/css/reset.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(MintUI)
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: '../static/images/loading.gif'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
