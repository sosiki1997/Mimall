<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  name: "App",
  components: {},
  mounted() {
    // storage.setItem("a", 1); //和user同级
    // storage.setItem('user',{a:1})  //覆盖掉了重新写了个user
    // storage.setItem("abc", { a: 1 }, "user"); //写在了user下
    // storage.clear("a"); //跟user同级的a被删除
    storage.clear("a", "user"); //删除user下面的a
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
