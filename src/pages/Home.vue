<template>
    <div class="home">
        <Heads :name="'首页'"></Heads>
    </div>
</template>
<script>
    import Heads from './../components/Head.vue'
    export default {
        data(){
            return {
                msg:'我是首页'
            }
        },
        components:{
            Heads,
        }
    }
</script>

<style lang="scss">
  .home {
      height: 100%;
      width: 100%;
      font-size: 0.32rem;

    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
  }
</style>
