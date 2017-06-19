<template>
    <div class="footer">
        <yd-tabbar>
            <yd-tabbar-item title="首页" link="#">
                <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="#" active>
                <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="#">
                <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>
<script>
    import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
    export default {
        data(){
            return {
                foot:['']
            }
        },
        methods:{

        },
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>
<style>
.footer{
    width: 100%;
    position: fixed!important;
    bottom: 0;
    left: 0;
}
</style>
