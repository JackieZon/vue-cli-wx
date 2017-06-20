<template>
  <div class="my">{{msg}}</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'个人中心'
            }
        },
    }
</script>

<style lang="scss">
  .my {
      height: 100%;
      width: 100%;
      font-size: 0.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>