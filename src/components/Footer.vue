<template>
    <!--<div class="footer">
        <div>首页</div>
        <div>个人</div>
    </div>-->
    <!--<yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/app/home" :active="tabState==tabData[0]" @click.native="tabState=tabData[0]">
            <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="新闻" link="/app/news" :active="tabState==tabData[1]" @click.native="tabState=tabData[1]">
            <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人" link="/app/my" :active="tabState==tabData[2]" @click.native="tabState=tabData[2]">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>-->
      <div>
        我是底部
        <!--<group>
        <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
        <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
        </group>
        <tabbar>
        <tabbar-item>
            <img slot="icon" src="../assets/demo/icon_nav_button.png">
            <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item show-dot>
            <img slot="icon" src="../assets/demo/icon_nav_msg.png">
            <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
            <img slot="icon" src="../assets/demo/icon_nav_article.png">
            <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2">
            <img slot="icon" src="../assets/demo/icon_nav_cell.png">
            <span slot="label">News</span>
        </tabbar-item>
        </tabbar>-->
    </div>

</template>
<script>
    // import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
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
            // TabBar,
            // TabBarItem,
            // Tabbar,
            // TabbarItem,
            // Group,
            // Cell
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
