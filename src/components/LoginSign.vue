<template>
    <section class="login-box">
        <div>
            <p :class="login_active">登录</p>
            <p :class="!login_active">注册</p>
        </div>
        <div class="login-content">
            <div>
                <label>账号：</label>
                <input type="text" placeholder="请输入您的用户名"/>
            </div>
            <div>
                <label>密码：</label>
                <input type="password" placeholder="请输入您的密码"/>
            </div>
        </div>
        <div class="sign-in-content">
            <div>
                <label>账号：</label>
                <input type="text" placeholder="请输入您的用户名"/>
            </div>
            <div>
                <label>密码：</label>
                <input type="password" placeholder="请输入您的密码"/>
            </div>
            <div>
                <label>确认密码：</label>
                <input type="password" placeholder="请确认您的密码"/>
            </div>
        </div>
        <div>
            <p class="btn btn-ok" @click="submitForm">确定</p>
        </div>
    </section>
</template>
<script>
    export default{
        data(){
            return {}
        },
        property: ['login_active'],
        methods: {
            submitForm(event){

            }
        }
    }
</script>
<style>

</style>