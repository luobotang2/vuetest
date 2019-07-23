// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  console.log('beforeEach invoked')
  // console.log(to)
  if(to.fullPath==='/login'){
    next()
  }else{
    console.log('不是login不作处理')
  }
})
router.beforeResolve((to,from,next)=>{
console.log('beforeResolve invoked')
  next()
})

router.afterEach((to,from)=>{
  console.log('afterEach invoked')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
