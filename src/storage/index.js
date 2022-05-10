// 数据存储
<<<<<<< HEAD
=======
// [Session Storage]  user: {userName: 'jack', age: 30, sex: 1}

// Storage封装(Session Storage)
const STORAGE_KEY = "mall";

// ES6 规范，项目里面用
export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value; //跟user同级
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取值
  // 获取某一个模块下面的属性user下面的userName
  getItem(key, module_name) {
    if (module_name) {
      // 获取模块名称
      let val = this.getItem();
      //  val是一个Object
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 获取整个浏览器的缓存信息Session Storage
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  // 清空某一个值
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  },
};

// 在App.vue里操作
/*
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
*/
>>>>>>> mock
