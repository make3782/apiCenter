<template>
    <div class="login_div">
        <el-form :model="form" :rules="rules"  ref="login_form" label-position="right" label-width="120px">
            <el-form-item label="用户名:" prop="username">
                <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码:" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password" auto-complate="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码:" prop="confirm_password">
                <el-input type="password" placeholder="请再次输入密码" v-model="form.confirm_password" auto-complate="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click="submit" type="primary">注册</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>

    import { mapActions } from 'vuex';
    //import { USER_SIGNIN } from 'store/user';



        //import {USER_SIGNIN} from '../store/user';


    export default {
        created() {
            console.log(this.$store);
        },
        // 数据
        data() {
            var valid_confirm_pass = (rule, value, callback) => {
                console.log(this.form);
                if (value == "") {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次密码输入不一致！'));
                } else {
                    callback();
                }
            };

            return {
                form: {
                    username: '',
                    password: '',
                    confirm_password: ''
                },

                // 表单验证
                rules: {
                    username:[
                        {required:true, message:'请输入用户名', trigger:'blur'},
                        {min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                    confirm_password: [
                        {required: true, validator: valid_confirm_pass, trigger: 'blur'}
                    ]
                }
            };
        },

        // 方法
        methods: {
            //...mapActions([USER_SIGNIN]),
            reset() {
                this.$refs.login_form.resetFields();
            },

            submit(event) {
                this.$refs.login_form.validate((valid) => {
                    if (valid) {
                        //注册
                        this.$store.dispatch('USER_SIGNIN', this.form);
                        //return true;
                    } else {
                        return false;
                    }
                });
            }


        }
    }
</script>

<style lang="less">
    .login_div {
        width: 400px;
    }
</style>