import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/home";
// import Login from "./pages/login";
import Index from "./pages/index";
// import Product from "./pages/product";
// import Detail from "./pages/detail";

// import Cart from "./pages/cart";
// import Order from "./pages/order";
// import OrderConfirm from "./pages/orderConfirm";
// import OrderList from "./pages/orderList";
// import OrderPay from "./pages/orderPay";
// import Alipay from "./pages/alipay";

Vue.use(Router); //加载插件

export default new Router({
  // 路由配置 首页 产品栈页 产品详情页
  routes: [
    {
      // 根路由
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index", //默认加载/index
      //   加载子路由
      children: [
        {
          path: "/index",
          name: "index",
          component: Index,
        },
        {
          path: "/product/:id", //动态路由
          name: "product",
          // component: Product,
          // 路由懒加载（按需加载）方法一
          // component: (resolve) => require(["./pages/index.vue"], resolve),
          // 路由懒加载（按需加载）方法二
          component: () => import("./pages/product.vue"),
        },
        {
          path: "/detail/:id", //动态路由
          name: "detail",
          // component: Detail,
          component: () => import("./pages/detail.vue"),
        },
      ],
    },
    // 路由配置 购物车
    {
      path: "/login",
      name: "login",
      // component: Login,
      component: () => import("./pages/login.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      // component: Cart,
      component: () => import("./pages/cart.vue"),
    },
    // 路由配置 订单
    {
      path: "/order",
      name: "order",
      component: () => import("./pages/order.vue"),
      children: [
        {
          path: "list",
          name: "order-list",
          component: () => import("./pages/orderList.vue"),
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: () => import("./pages/orderConfirm.vue"),
        },
        {
          path: "pay",
          name: "order-pay",
          component: () => import("./pages/orderPay.vue"),
        },
        {
          path: "alipay",
          name: "alipay",
          component: () => import("./pages/alipay.vue"),
        },
      ],
    },
  ],
});
