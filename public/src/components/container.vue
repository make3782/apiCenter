<template>
    <div class="main">
        <p>这里是主框架输出123123</p>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <el-alert title="alert test" type="info"></el-alert>
    </div>
</template>


<script>
// wzx
    export default{
    //module.exports = {
        //name: 'Container',
        data: function() {
            return {
                login: false,
                title: "api center"
            }
        },

        components: {
            //ElementUI.alert
        }
    }
</script>


<style>
    /*some style here*/
</style>