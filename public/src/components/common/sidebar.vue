<template>
    <div class="left db-left" v-show="show">


        <!-- 左侧竖条导航 -->
        <div class="dlc2 bg">
            <div class="db-left-bar">
                <div class="logo ta-c">
                    <router-link to="/"><img src="../../assets/images/logo/full-white.png" /></router-link>
                </div>

                <ul>
                        <li class="db-item ta-c"><router-link to="/"><i class="iconfont icon-add-circle"></i></router-link></li>
                        <li class="db-item ta-c" @click="content_show=!content_show"><a><i class="iconfont icon-projects" v-bind:class="{'active':content_show}"></i></a></li>
                    </ul>
            </div>

            <div class="db-left-content" v-show="content_show">
                <div class="ta-c logo"><a href="/"><img src="../../assets/images/logo/full.png" /></a></div>
                <div class="db-left-search">
                    <div class="cb">
                        <div class="fl"><i class="iconfont icon-sousuo"></i></div>
                        <div class="fl"> <input type="text" placeholder="快速查找项目" value=""> </div>
                    </div>
                </div>
                <div class="line"></div>
                <br />
                <ul>
                    <li class="db-item"><a class="bd-add" href="#!/add"> <i class="iconfont icon-add-circle"></i>创建项目</a></li>
                    <li class="line"></li>
                    <li class="bd-project-title" style="display: none;">常用项目</li>
                    <!--v-for-start--><!--v-for-end-->
                    <li class="bd-project-title">我的项目</li>
                    <li class="db-item" v-for="proj in projects">
                        <router-link :to="{name: 'dashboard', params: {id: proj.ProjectId}}"><i class="iconfont icon-projects"></i>{{proj.ProjectName}}</router-link>
                        <a class="shoucang"><i class="iconfont icon-biaoxing"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data: function() {
            return {
                content_show: false
            }
        },
        computed: {
            ...mapGetters({
                show: 'getLeftNavState',
                projects: 'getProjectList'
            })
        },

        created: function() {
            this.$store.dispatch('getProjectList');
        }
    }
</script>

<style lang="less">
    /*侧边栏*/
    .db-left-bar {
        background-color: #2e2d2b;
        color: #fff;
        width: 60px;
        height: 100%;
        position: fixed;
        z-index: 99;
        left: 0;
        top: 0;
        overflow-y: auto;

        .logo {
            margin-top: 50px;

            img {
                width: 50px;
                vertical-align: middle;
            }
        }

        .db-item {
            padding-left: 0;

            a {
                -webkit-flex:3;
                flex:3;
                height: 40px;
                width:50px;
                line-height:40px;
                color: #a2a2a2;
                text-decoration:none;

                :hover {
                    color: #fff;
                }
            }

            i {
                font-size: 30px;
                font-weight: bold;
                margin-right: inherit;
            }

        }


        ul {
            display: block;
            list-style-type: disc;
            margin-top: 50px;
        }
    }

    .db-left-content {
        left:60px;
        position: fixed;
        width: 250px;
        top:0;
        left:0;
        height: 100%;
        overflow-y: auto;
        background-color: #fff;

        .db-left-search {
            margin: 40px 0 5px 25px;
        }

        ul {
            display: block;
            list-style-type: disc;
        }

        .db-item {
            display: flex;
            padding-left: 26px;
            margin-bottom: 10px;
            a {
                -webkit-flex: 3;
                flex: 3;
                height: 40px;
                width: 50%;
                line-height: 40px;
            }

            i {
                margin-right: 10px;
            }


        }

        .bd-project-title {
            padding-left: 26px;
            font-size: 16px;
            margin: 30px 0 20px 0;
        }
    }



</style>