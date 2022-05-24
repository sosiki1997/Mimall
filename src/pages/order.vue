<!-- 订单主结构 -->

<template>
  <div>
    <!-- <order-header v-bind:title="title">
      <template v-slot:tip>
        <span> {{ tip }}</span>
      </template>
    </order-header> -->
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// import OrderHeader from "./../components/OrderHeader";
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";
export default {
  name: "order",
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  components: {
    // OrderHeader,
    ServiceBar,
    NavFooter,
  },
  // 子组件加载时，父组件只会加载一次，不会进到路由，不能及时更新
  // mounted() {
  //   let path = this.$route.path;
  //   if (path == "/order/confirm") {
  //     this.title = "订单确认";
  //     this.tip = "请认真填写收货地址";
  //   } else if (path == "/order/list") {
  //     this.title = "订单列表";
  //     this.tip = "请核对商品🥬";
  //   }
  //   else if (path == "/order/pay") {
  //     this.title = "订单支付";
  //     this.tip = "购物愉快🛒";
  //   }
  //   else {
  //     this.title = "订单支付";
  //     this.tip = "购物愉快🛒";
  //   }
  // },
};
</script>
