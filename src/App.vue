<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr></hr>
    <div class="intro">Essential Links</div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      Footer
    }
  }
</script>

<style lang="scss">
  #app {
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
    img{
      width: 2rem;
      height: 2rem;
    }
    .intro{
      font-size: 0.30rem;
    }
  }
</style>
