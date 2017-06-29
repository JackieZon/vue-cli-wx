<template>
    <div class="home">
        <Heads :name="'首页'"></Heads>
        <template>
            <yd-slider autoplay="5000">
                <yd-slider-item v-for="item in bannerList">
                    <div class="img-box">
                        <img :src="item">
                    </div>
                </yd-slider-item>
            </yd-slider>
        </template>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
    import Heads from './../components/Head.vue'
    
    Vue.component(Slider.name, Slider);
    Vue.component(SliderItem.name, SliderItem);

    export default {
        data(){
            return {
                msg:'我是首页',
                bannerList:[
                    'http://bpic.588ku.com/back_pic/02/64/88/4957863e5539451.jpg',
                    'http://bpic.588ku.com/back_pic/00/02/44/655617a0ebf40b2.jpg',
                    'http://bpic.588ku.com/back_pic/03/51/89/095792db5835107.jpg',
                    'http://bpic.588ku.com/back_pic/03/68/22/2357b2bc480bc98.jpg',
                    'http://bpic.588ku.com/back_pic/03/70/72/5257b6c12d89875.jpg!/fh/300/quality/90/unsharp/true/compress/true',
                    'http://bpic.588ku.com/back_pic/03/75/59/9357bd8f9f6c559.jpg',
                    'http://bpic.588ku.com/back_pic/00/14/26/58565af39629b14.jpg',
                    'http://bpic.588ku.com/back_pic/00/08/53/17562a43dac4e41.jpg!/fh/300/quality/90/unsharp/true/compress/true',
                    'http://bpic.588ku.com/back_pic/00/05/17/205625fe14cfbb1.jpg',
                    'http://bpic.588ku.com/back_pic/02/67/58/81578e331cc7693.jpg',
                    'http://bpic.588ku.com/back_pic/04/89/17/9258f8bebbaf1eb.jpg!/fh/300/quality/90/unsharp/true/compress/true',
                ]
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
    .img-box{
        height:4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img{
            height: 100%;
            width:auto!important;
        }
    }
</style>
