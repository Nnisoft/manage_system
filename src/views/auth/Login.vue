<template>
  <div id="login">
    <h1>登录</h1>
    <input type="text" placeholder="账号" v-model="acount" />
    <input type="text" placeholder="确认密码" v-model="password" />
    <button @click="confirmAction">登录</button>
  </div>
</template>

<script>
import { http, api } from "../../request";
export default {
  data() {
    return {
      acount: "",
      password: "",
    };
  },
  methods: {
    async confirmAction() {
      const data = await http.post(api.LOGIN_API, {
        acount: this.acount,
        password: this.password,
      });
      //登录成功
      localStorage.setItem("token", data.token);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>