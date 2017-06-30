<template>
    <div class="file">
        <div class="fileBox">
            <div class="fileBoxs">
                <input class="fileBtn" v-on:change="changeFile" type="file" ref="fileBtn" >
            </div>
        </div>
        <div class="file-info">
            <div class="item">文件名&nbsp;：{{files?files.name:'无'}}</div>
            <div class="item">文件大小：{{files?(Math.round(files.size / (1024 * 1024) * 100) / 100)+'M':'无'}}</div>
            <div class="item">文件类型：{{files?'.'+files.name.split('.')[1]:'无'}}</div>
        </div>
        <progress  :value="valueStatus" :max="max" class="progress"> ^_^ </progress>
        <div >{{valueStatus+'%'}}</div>

        <yd-button size="large" type="primary">支付并打印</yd-button>
        <yd-button size="large" @click.native="clearData" type="hollow">清除</yd-button>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {postFormData} from './../../servers/home.js'
    import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    export default {
        data(){
            return {
                files:'',
                valueStatus:0,
                max:100,
                dataURL:[]
            }
        },
        created(){
            console.log(postFormData)
        },
        watch:{
            valueStatus(val, oldVal){
            }
        },
        methods:{
            changeFile(){
                var t_data = this;
                this.files = this.$refs.fileBtn.files[0];

                var formData = new FormData();
                formData.append("userfile", this.files);

                var res = postFormData(formData)

                // console.log(this.$refs.fileBtn.files);

                // var reader = new FileReader();
                // reader.onprogress = function(loadeds){
                //     t_data.valueStatus = Math.round((loadeds.loaded / loadeds.total)*100)
                // }
                // reader.onload = function() {
                //     var dataURL = reader.result;
                //     t_data.dataURL.push(dataURL);
                // };

                // for(var j=0; j < this.files.length; j++){
                // reader.readAsDataURL(this.files);
                // }

                // reader.readAsDataURL(this.$refs.fileBtn.files[0]); // Base 64 格式数据
                // reader.readAsText(this.files);    // 文本格式形式

            },
            clearData(){
                this.files = '';
            }
        }
    }
</script>
<style lang="scss">
.file{
    img{
        display: block;
        margin: 0 auto;
        margin-bottom: 0.3rem;
        height:3rem;
    }
    .padding10{
        margin: 1rem 0;
    }
    padding: 0.3rem;
    width:100%;
    .progress{
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
            width:2rem;
            height:2rem;
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
        padding: 0.5rem 0.3rem;
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