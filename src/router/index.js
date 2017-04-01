import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
  routes: [{
      path: '/',
      name: 'Index',
      component: (resolve)=>{
          require(['@/components/Hello'], resolve);
      }
    },{
      path: '/love_hate/:id',
      name: 'Hello',
      component: (resolve)=>{
          require(['@/components/Hello'], resolve);
      }
    },{
      path: '/personal/',
      name: 'Personal',
      component: (resolve)=>{
          require(['@/components/Notice'], resolve);
      }
  }
  ]
})
