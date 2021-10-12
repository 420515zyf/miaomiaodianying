//引入外部文件或文件夹区-------------------------------
//引入根模块组件
import App from './App.vue';

//引入路由处理文件
import router from './router/router';

//引入vuex状态管理相关文件
import store from './store/index';

//---------------------------------------------------

//相关安装包插件，库，框架引入挂载区--------------------
//引入Vue框架包
import Vue from 'vue';

//引入axios封装js
import axios from './axios';
//将axios挂载到vue原型上
Vue.prototype.$axios = axios;

//引入element-ui插件包
import ElementUI from 'element-ui';
//引入element-ui样式文件
import 'element-ui/lib/theme-chalk/index.css';
//挂载element-ui框架
Vue.use(ElementUI);

//---------------------------------------------------

//设置为开发模式：
Vue.config.productionTip = false;

//创建vue实例
var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router,
    store
})