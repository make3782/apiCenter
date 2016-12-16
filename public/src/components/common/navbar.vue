<template>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" v-show="show">
        <el-menu-item index="1">首页</el-menu-item>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                show: 'getLeftNavState'
            })
        }
    }
</script>