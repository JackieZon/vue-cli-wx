<template>
<div class="mains">
    <Heads :name="'个人'"></Heads>
    <div class="my">
        <div class="logo">
            <img src="./../assets/img/subei.png"/>
            <div>关注我们</div>
        </div>
        <div class="help-me">
            支持我们($10)
        </div>
    </div>
</div>
</template>
<script>
    import Heads from './../components/Head.vue'
    export default {
        data(){
            return {
                msg:'个人中心'
            }
        },
        methods:{

        },
        components:{
            Heads,
        }
    }
</script>

<style lang="scss">
.mains{
    width:100%;
    height: 100%;
}
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
        margin-bottom: 1rem;
        img{
            width:5rem;
            height:5rem;
        }
    }
    .help-me{
        padding: 0 15px;
        line-height: 0.8rem;
        border: 0.02rem solid rgb(9, 187, 7);
        border-radius: 0.16rem;
    }
}
</style>