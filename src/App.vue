<template>
  <div id="app">
    <router-link to="/app">app</router-link>
    <router-link :to="{path:'/login'}">login</router-link>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <h1>App.vue默认作为入口文件</h1>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563857351596&di=ed9bfdbc2baf9e59e6f9cb58f3d4e389&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FF%2FF3%2FF3A341459DAE989598C8EAEE5A325D7C.png" alt="icon">

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
