<template>
<div class="my">
    <div class="logo">
        <img src="./../assets/img/subei.png"/>
        <div>关注我们</div>
    </div>
    <div>
        资助我们($10)
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'个人中心'
            }
        },
        methods:{

        }
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
    background:#fff;
    flex-direction: column;
    .logo{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        img{
            width:5rem;
            height:5rem;
        }
    }
}
</style>