// 环境变量模块

let baseURL;

// 根据不同的环境输出不同的url地址
//获取当前Nodejs进程里面的环境变量
switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "http://dev-mall-pre.springboot.cn/api";
    break;
  case "test":
    baseURL = "http://test-mall-pre.springboot.cn/api";
    break;
  case "prod":
    baseURL = "prod://dev-mall-pre.springboot.cn/api";
    break;
  default:
    baseURL = "http://mall-pre.springboot.cn/api";
    break;
}

export default {
  baseURL,
};
