// import预编译加载
import Vue from "vue";
import router from "./router";
import axios from "axios";
// vue-axios把作用域对象挂载到vue实例上去，方便用this去调用
import VueAxios from "vue-axios";
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
const mock = true;
if (mock) {
  require("./mock/api"); //执行时加载
}

// 根据前端的跨域方式做调整.把环境变量抽取到一个模块里去，集中进行管理
axios.defaults.baseURL = "/api"; //代理跨域
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口拦截
axios.interceptors.response.use(function (response) {
  let res = response.data; //取到接口返回的值
  // 成功
  if (res.status == 0) {
    return res.data;
    // 登录拦截
  } else if (res.status == 10) {
    window.location.href = "/#/login";
    // 弹出错误信息
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
