<!-- 主页面 -->
<!-- 承载indexPage, productPage,detailPage，只需关注它们三个内部核心的内容开发即可 -->
<!-- homePage为它们分出了结构 -->
<template>
  <div>
    <!-- 复用了nav-header和nav-footer，剩下的页面部分嵌套到router-view里即可 -->
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
export default {
  name: "homePage",
};
</script>

<style></style>
