<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',

}
</script>

<style>
#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
body{
    background: #eee;
}
.container{
  width: 100%;
  height: 100%;
}

@import './assets/css/common.css'

</style>
