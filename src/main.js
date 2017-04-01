// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'

window.$ = window.Zepto = require('webpack-zepto');
require("./util/zepto-adapter");//zepto 公共扩展

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data(){
    "use strict";
    return {
      eventHub: new Vue()
    }
  }
})
