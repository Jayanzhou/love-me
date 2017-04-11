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
          require(['@/components/Index'], resolve);
      }
    },{
      path: '/love_hate/:id',
      name: 'Hello',
      component: (resolve)=>{
          require(['@/components/Hello'], resolve);
      }
    },{
      path: '/login/',
      name: 'Login',
      component: (resolve)=>{
          require(['@/components/LoginSign'], resolve);
      }
    },{
      path: '/sign/',
      name: 'Sign',
      component: (resolve)=> {
          require(['@/components/LoginSign'], resolve);
      }
    },{
      path: '/load/',
      name: 'Load',
      component: (resolve)=> {
          require(['@/components/Load'], resolve);
      }
  }
  ]
})
