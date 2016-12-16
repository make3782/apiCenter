<template>
    <div class="main">
        <Navbar></Navbar>


        <div class="application-view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <Sidebar></Sidebar>
    </div>


</template>

<script>
    import Sidebar from './components/common/sidebar';
    import Navbar from './components/common/navbar';


    //console.log(Sidebar);


    export default {
        components: {
            Sidebar,Navbar
        }
    }
</script>
<style lang="less">
    body {
        background-color: #ebebeb;
    }
    .main {
        height: 100%;
        width: 100%;
        /*position: absolute;*/
        overflow: hidden;
    }

    .application-view {
        margin:auto;
        /*margin-left: 100px;*/
        margin-right: 0;
        margin-top: 50px;
    }
</style>
