{<template>
    <div class="file">
        <input v-on:change="changeFile" type="file" multiple ref="fileBtn">
        <hr class="padding10">
        <!--<img src="data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7" alt="">-->
        <div>
            <!--<img v-for="item in dataURL" :src="item" alt="">-->
        </div>
        <progress v-if="valueStatus" :value="valueStatus" :max="max" class="progress"> ^_^ </progress>
        <div >{{valueStatus+'%'}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'我是文件',
                valueStatus:0,
                max:100,
                dataURL:[]
            }
        },
        created(){

        },
        watch:{
            valueStatus(val, oldVal){
            }
        },
        methods:{
            changeFile(){
                var t_data = this;
                console.log(this.$refs.fileBtn.files);

                var reader = new FileReader();
                var count = 0;

                reader.onprogress = function(loadeds){
                    count += 1;
                    
                    t_data.valueStatus = Math.round((loadeds.loaded / loadeds.total)*100)
                    console.log(t_data.valueStatus);
                    
                }

                reader.onload = function() {

                    var dataURL = reader.result;

                    console.log('base 格式出来了')

                    // console.log(dataURL);
                    // t_data.dataURL.push(dataURL);

                    
                };

                // for(var j=0; j < this.$refs.fileBtn.files.length; j++){
                    reader.readAsDataURL(this.$refs.fileBtn.files[0]);
                    // console.log(j);
                // }

                // reader.readAsDataURL(this.$refs.fileBtn.files[0]); // Base 64 格式数据
                // reader.readAsText(this.$refs.fileBtn.files[0]);    // 文本格式形式

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
}
</style>}