<template>
    <div class="news">
        <Heads :name="'组件'"></Heads>
        <div class="m-grids-4">
            <div class="grids-item" @click="openQRCodes">
                <div class="grids-icon"><i class="icon-qrscan"></i></div>
                <div class="grids-txt"><span>二维码</span></div>
            </div>
            <div class="grids-item">
                <div class="grids-icon"><i class="icon-order"></i></div>
                <div class="grids-txt"><span>微信支付</span></div>
            </div>
            <div class="grids-item">
                <div class="grids-icon"><i class="icon-video"></i></i></div>
                <div class="grids-txt"><span>相册</span></div>
            </div>
            <div class="grids-item">
                <div class="grids-icon"><i class="icon-discount"></i></i></div>
                <div class="grids-txt"><span>轮播组件</span></div>
            </div>
            <div class="grids-item">
                <div class="grids-icon"><i class="icon-shopcart-outline"></i></i></div>
                <div class="grids-txt"><span>组件展示</span></div>
            </div>
        </div>
    </div>
</template>
<script>
    import {wxInit, wxScanQRCodes} from './../../utils/weixin.js'
    import Heads from './../components/Head.vue'
    export default {
        data(){
            return {
                msg:'我是新闻'
            }
        },
        components:{
            Heads,
        },
        methods:{
            openQRCodes(){
                wxInit(function(){
                    wxScanQRCodes((res)=>{
                        alert(res);
                    })
                });
            }
        }
    }
</script>

<style lang="scss">
  .news {
      height: 100%;
      width: 100%;
      font-size: 0.32rem;
  }
  .grids-icon{
      font-size: 0.46rem;
  }
</style>
