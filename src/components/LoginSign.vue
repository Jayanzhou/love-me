<template>
    <section class="login-box">
        <div>
            <p :class="login_active">登录</p>
            <p :class="!login_active">注册</p>
        </div>
        <template v-if="login_active">
            <div class="login-content">
                <div>
                    <label>账号：</label>
                    <input type="text" placeholder="请输入您的用户名" v-model.trim="userName"/>
                </div>
                <div>
                    <label>密码：</label>
                    <input type="password" placeholder="请输入您的密码" v-model.trim="userPwd"/>
                </div>
            </div>
        </template>

        <template v-else>
            <div class="sign-in-content" >
                <div>
                    <label>账号：</label>
                    <input type="text" placeholder="请输入您的用户名" v-model.trim="userName"/>
                </div>
                <div>
                    <label>密码：</label>
                    <input type="password" placeholder="请输入您的密码" v-model.trim="userPwd"/>
                </div>
                <div>
                    <label>确认密码：</label>
                    <input type="password" placeholder="请确认您的密码" v-model.trim="checkUserPwd"/>
                </div>
            </div>
        </template>

        <div>
            <p class="btn btn-ok" @click="submitForm">确定</p>
        </div>
    </section>
</template>
<script>
    import {ajaxDefine} from '../util/request'

    export default{
        data(){
            return {
                login_active: true,
                userName: '',
                userPwd: '',
                checkUserPwd: ''
            }
        },
        created(){
            //根据url，切换状态
        },
        property: ['login_active'],
        methods: {
            submitForm(event){
                let promise = ajaxDefine({
                    url: 'http://10.200.247.86:8080/springTest/user/add?userName='+this.userName+'&password='+this.userPwd,
                    /*data: {
                        userName: this.userName,
                        userPwd: this.userPwd
                    }*/
                });
                promise.then(res => {
                    debugger
                    console.log(1);
                }).catch(err => {
                    debugger
                });
            }
        }
    }
</script>
<style>

</style>