//路由处理文件------------------------------
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//创建路由实例
var router = new VueRouter({
    routes: [
        { path: "/", redirect: "/index" }
    ]
});

//导航守卫
router.beforeEach((to, from, next) => {
    next();
});

export default router;