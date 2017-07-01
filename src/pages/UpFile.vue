<template>
    <div class="main">
        <Heads :name="'我要打印'"></Heads>
        <div class="file">
            <div class="fileInfo">
                <div class="fileBox">
                    <div class="fileBoxs">
                        <input class="fileBtn" v-on:change="changeFile" type="file" ref="fileBtn" >
                    </div>
                </div>
                <progress  :value="valueStatus" :max="max" class="progress"> ^_^ </progress>
                <div >{{valueStatus+'%'}}</div>
                <div class="file-info">
                    <div class="item">文件名&nbsp;：{{files?files.name:'无'}}</div>
                    <div class="item">文件大小：{{files?(Math.round(files.size / (1024 * 1024) * 100) / 100)+'M':'无'}}</div>
                    <div class="item">文件类型：{{files?'.'+files.name.split('.')[1]:'无'}}</div>
                </div>
            </div>
            <yd-cell-group title="打印纸张及颜色">
                <yd-cell-item type="radio">
                    <span slot="left">A4黑白(每张<span class="cash">0.5</span>元)</span>
                    <input slot="right" type="radio" value="1" v-model="picked"/>
                </yd-cell-item>

                <yd-cell-item type="radio">
                    <span slot="left">A4彩色(每张<span class="cash">3.0</span>元)</span>
                    <input slot="right" type="radio" value="2" v-model="picked"/>
                </yd-cell-item>
            </yd-cell-group>
            <div class="filePay">
                <yd-button size="large" type="primary" @click.native="orderAdd">支付并打印</yd-button>
                <yd-button size="large" @click.native="clearData" type="hollow">清除</yd-button>
            </div>
        </div>
    </div>
</template>
<script>
    import Heads from './../components/Head.vue'
    import Vue from 'vue'
    import { uploadFile, orderAdd } from './../../servers/home.js'
    import { wxPay, wxInit } from './../../utils/weixin.js'
    import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    export default {
        data(){
            return {
                files:'',
                valueStatus:0,
                max:100,
                dataURL:[],
                picked:1,
                result:{}
            }
        },
        components:{
            Heads
        },
        created(){
            
        },
        mounted(){

        },
        watch:{
            valueStatus(val, oldVal){
            },
            picked(val,oldVal){
                console.log(val);
            }
        },
        methods:{
            changeFile(){
                var t_data = this;
                this.files = this.$refs.fileBtn.files[0];

                var formData = new FormData();
                formData.append("file", this.files);

                var res = uploadFile(formData,function(res){
                    console.log('上传进度');
                    console.log(res);
                    t_data.valueStatus = Math.round((res.loaded / res.total)*100)
                });
                res.then((s)=>{
                    console.log(s);
                    t_data.result = s;
                })
            },
            clearData(){
                this.result = {};
                this.files = '';
                this.valueStatus = 0;
            },
            orderAdd(){

                const t_data = this;
                const url = '/Orders/OrderAdd';
                const memberId = sessionStorage.getItem('memberId');
                const res = orderAdd(0,memberId,0,t_data.result.filePage,t_data.picked,t_data.result.filePath);
                res.then((cashRes)=>{

                    alert(JSON.stringify(cashRes));
                    console.log(JSON.stringify(cashRes));

                    wxInit(()=>{
                        wxPay(cashRes.info.orderId,(payRes)=>{

                            alert(JSON.stringify(payRes));

                        })
                    });
                    
                })
            }
        }
    }
</script>
<style lang="scss">
.main{
    width:100%;
    box-sizing: border-box;
    padding-bottom: 1.8rem;
}
.cash{
    font-size: 0.46rem;
    color:#FF4500;
}
.file{
    width:100%;
    .fileInfo{
        padding: 1rem .3rem .3rem;
        background:#fff;
        margin-bottom: 0.1rem;
    }
    .filePay{
        padding: 0 0.3rem;
    }
    img{
        display: block;
        margin: 0 auto;
        margin-bottom: 0.3rem;
        height:3rem;
    }
    .padding10{
        margin: 1rem 0;
    }
    .progress{
        margin-top: 0.5rem;
        width:100%;
        ::-prefix-progress-value{
            background:#0366d6;
        }
    }
    .fileBox{
        watch:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        .fileBoxs{
            display: flex;
            width:1.5rem;
            height:1.5rem;
        }
    }
    .fileBtn{
        background: url(./../assets/img/add-icon.png) 50% 50% no-repeat #fff;
        background-size:60%;
        width:100%;
        height:100%;
        border: 1px solid #a0b3d6;
        color: #34538b;
    }
    ::-webkit-file-upload-button {
        display:none;
        padding: .4em;
        line-height: 30px;
        border: 1px solid #a0b3d6;
        background: #f0f3f9;
        color: #34538b;
    }
    .btn-block{
        margin-top:0.2rem;
    }
    .file-info{
        box-sizing: border-box;
        padding: 0.3rem 0rem;
        font-size:0.32rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .item{
            white-space: nowrap; 
            text-overflow: ellipsis; 
            -o-text-overflow: ellipsis; 
            overflow: hidden;
            text-align:left;

        }
    }
}
</style>