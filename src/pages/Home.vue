<template>
  <div class="home">{{msg}}</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'我是首页'
            }
        },
    }
</script>

<style lang="scss">
  .home {
      height: 100%;
      width: 100%;
      font-size: 0.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>
