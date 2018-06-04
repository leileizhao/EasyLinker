<template>
  <el-form ref="AccountFrom"  :rules="rules" label-position="left" label-width="10px"
           class="login-container">
    <h3 class="title" style="margin-bottom:50px;">系统登录</h3>
    <el-form-item prop="loginParam">
      <el-input type="text" v-model="this.account.loginParam" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="this.account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;"  v-on:click="login">登录</el-button>
      <router-link to="/register">去注册</router-link>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  mounted() {},
  data() {
    return {
      account: {
        loginParam: "admini",
        password: "admini"
      },
      rules: {
        loginParam: [{ required: true, message: "请输入账号" }],
        password: [{ required: true, message: "请输入密码" }]
      },
      checked: true
    };
  },
  methods: {
    login() {
      this.$http.post("/api/userLogin", this.account).then(res => {
        if (res.data.state == 1) {
          sessionStorage.UID = res.data.data.UID;
          sessionStorage.username = res.data.data.username;
          sessionStorage.avatar = res.data.data.avatar;
          this.$router.push({ path: "/home" });
        } else {
          alert(res.data.message);
        }
      });
    }
  }
};
</script>


<style>

.login-container {
  width: 350px;
  margin-top: 10%;
  margin-left: 36%;
}
</style>
