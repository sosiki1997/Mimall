import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/home";
import Index from "./pages/index";
import Product from "./pages/product";
import Detail from "./pages/detail";

import Cart from "./pages/cart";
import Order from "./pages/order";
import OrderConfirm from "./pages/orderConfirm";
import OrderList from "./pages/orderList";
import OrderPay from "./pages/orderPay";
import Alipay from "./pages/alipay";

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
          component: Product,
        },
        {
          path: "/detail/:id", //动态路由
          name: "detail",
          component: Detail,
        },
      ],
    },
    // 路由配置 购物车
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    // 路由配置 订单
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "list",
          name: "orderList",
          component: OrderList,
        },
        {
          path: "confirm",
          name: "orderConfirm",
          component: OrderConfirm,
        },
        {
          path: "pay",
          name: "orderPay",
          component: OrderPay,
        },
        {
          path: "alipay",
          name: "alipay",
          component: Alipay,
        },
      ],
    },
  ],
});
