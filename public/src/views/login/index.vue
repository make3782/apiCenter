<template>
    <div class="login-form ">
        <el-form class="form" ref="form" :rules="rules" :model="form">
            <div class="ta-c logo"><a href="/"><img src="../../assets/images/logo/full.png"></a></div>

            <el-form-item prop="email"><el-input placeholder="邮箱" v-model="form.email" ></el-input></el-form-item>
            <el-form-item prop="txtpassword"><el-input placeholder="密码" type="password" v-model="form.txtpassword" ></el-input></el-form-item>

            <el-form-item class="item"><el-button type="primary" style="width:100%;" @click="login" >&nbsp;&nbsp;&nbsp;&nbsp;登&nbsp;&nbsp;陆&nbsp;&nbsp;&nbsp;&nbsp;</el-button></el-form-item>
            <el-form-item class="">
                <el-row type="flex">
                    <el-col :span="6" class="bottom-txt"><router-link to="/">忘记密码</router-link></el-col>
                    <el-col :span="6" class="bottom-txt"><router-link to="/">免费注册</router-link></el-col>
                    <el-col :span="6"></el-col>
                    <el-col :span="6" class="bottom-txt"><el-checkbox v-model="form.remember" checked class="bottom-txt">记住密码</el-checkbox></el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '111@123.com', txtpassword: '123', remember: true
                },
                rules: {
                    email: [
                        {required: true, message: "请输入邮箱", trigger: 'blur'},
                        {type: 'email', message:"请输入正确的邮箱格式", trigger: 'blur'},
                    ],
                    txtpassword: [
                        {required: true, message:"请输入密码", trigger: 'blur'}
                    ]
                }
            };
        },

        methods: {
            login() {
                this.$refs.form.validate((va) => {
                    if (va === false) {
                        return false;
                    }
                    this.$store.dispatch('userLogin', this.form).then((res) => {
                        this.$router.replace('index');
                        let user = JSON.parse(res);

                        // 初始化左侧菜单
                        this.$store.dispatch('getProjectList')

                        // 初始化头部菜单
                    })
                })

            }
        }
    }
</script>


<style lang="less">
    .login-form {
        width: 300px;
        margin: 0 auto;

        .logo {
            margin-bottom: 30px;
            img {
                vertical-align: middle;
                width:140px;
            }
        }

        .item {
            border-bottom: 1px solid #efefef;
            margin: 0;
            padding: 10px 0;
        }

        .bottom-txt {
            font-size: 9px;
        }

        .el-checkbox__label {
                font-size: 9px;
        }
    }

</style>