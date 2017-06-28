<template>
  <div class="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
  import Footers from './components/Footer.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created(){

      console.log('App.vue 文件初始化');

    },
    components:{
      Footers
    }
  }
</script>

<style lang="scss">
  .app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 0.18rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
    // img{
    //   width: 2rem;
    //   height: 2rem;
    // }
    .intro{
      font-size: 0.30rem;
    }
  }
</style>
