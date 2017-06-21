<template>
  <div class="news">{{msg}}</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'我是新闻'
            }
        },
    }
</script>

<style lang="scss">
  .news {
      height: 100%;
      width: 100%;
      font-size: 0.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
</style>