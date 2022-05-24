// import预编译加载
import Vue from "vue";
import router from "./router";
import axios from "axios";
// vue-axios把作用域对象挂载到vue实例上去，方便用this去调用
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
// 插件放上面，组件放下面
import App from "./App.vue";
// import env from "./env";

/* 接口规范
{
  status:0, //状态码
  data:[],  //数据
  msg:''    //报错
}
*/

// mock开关
const mock = false;
if (mock) {
  require("./mock/api"); //执行时加载
}

// 根据前端的跨域方式做调整.把环境变量抽取到一个模块里去，集中进行管理
axios.defaults.baseURL = "/api"; //代理跨域
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口拦截
axios.interceptors.response.use(
  function (response) {
    let res = response.data; //取到接口返回的值
    // 在首页时 不进行登录跳转
    let path = location.hash;
    // 成功
    if (res.status == 0) {
      return res.data;
      // 登录拦截
    } else if (res.status == 10) {
      if (path != "#/index") {
        window.location.href = "/#/login";
      }
      // 接口错误拦截 根据业务逻辑
      return Promise.reject(res);
      // 弹出错误信息
    } else {
      Message.warning(res.msg);
      // 抛出异常
      return Promise.reject(res);
    }
  },
  // 服务器状态码http错误拦截
  (error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg", //加载时的loading动画
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
