<template>
  <div id="register">
    <h1>注册</h1>
    <input type="text" placeholder="账号" v-model="acount" />
    <input type="text" placeholder="确认密码" v-model="password" />
    <button @click="confirmAction">注册</button>
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
      // 注册请求
      const data = await http.post(api.REGISTER_API, {
        acount: this.acount,
        password: this.password,
      });
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>