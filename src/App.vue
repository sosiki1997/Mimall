<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // mock
    // 本地加载请求静态json文件的形式
    // this.axios.get("/mock/user/login.json").then((res) => {
    //   this.res = res;
    // });
    // 通过easy-mock平台实现数据mock
    // 本地集成mockjs实现数据mock  只有这种不会发请求，因为在发请求那一瞬间就被拦截了
    this.axios.get("/user/login").then((res) => {
      this.res = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
