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
    return {};
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },

  methods: {
    getUser() {
      // 拉取数据
      this.axios.get("/user").then((res = {}) => {
        // to-do 保存到vuex里面
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getCartCount() {
      // 获取购物车数量总和
      this.axios.get("/carts/products/sum").then((res = 0) => {
        // to-do 保存到vuex里面
        this.$store.dispatch("saveCartCount", res);
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
