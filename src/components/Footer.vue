<template>
    <!--<div class="footer">
        <div>首页</div>
        <div>个人</div>
    </div>-->
    <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/app/home" :active="tabState==tabData[0]" @click.native="tabState=tabData[0]">
            <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="新闻" link="/app/news" :active="tabState==tabData[1]" @click.native="tabState=tabData[1]">
            <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人" link="/app/my" :active="tabState==tabData[2]" @click.native="tabState=tabData[2]">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>

</template>
<script>
    import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
    export default {
        data(){
            return {
                tabState:0,
                tabData:[0,1,2],
            }
        },
        created(){
        },
        methods:{
        },
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>
<style lang="scss">
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    line-height: 1rem;
    width: 100%;
    background: #fff;
    display: flex;    
    div{
        font-size: 0.18rem;
        position: relative;
        width: 50%;
    }
}
.footer:after{
    position: absolute;
    display: inline-block;
    top: 0;
    right: 50%;
    content: ' ';
    width: 0.02rem;
    height: 100%;
    background: #eee;
}
</style>
