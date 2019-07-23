import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/HelloWorld'
import Login from '@/components/Login/login'
import A from '@/components/A/A'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   redirect:'/app'
    // },
    {
      path: '/app',
      name: 'App',
      components: {
        default:A,
        a:Login
      },
      meta:{
        title:'app页面'
      }
    },{
    path:'/login',
      name:'Login',
      component:Login,
      meta:{
        title:'Login页面'
      }
    }
  ],
  mode: 'history'
})
