<template>
    <div class="head">
        <header class="m-navbar">
            <div class="navbar-center">
                <span class="navbar-title">{{name?name:'Navber'}}</span>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        props:['name'],
        data(){
            return {
                msg:'Navber'
            }
        },
        created(){
        },
        methods:{
        },
        components:{}
    }
</script>
<style lang="scss">
    .head{    
        position: flex;
        top: 0;
        width: 100%;
        padding-bottom: 0rem;
    }
    .m-navbar{
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    .navbar-title{
        font-size:0.32rem;
    }
</style>